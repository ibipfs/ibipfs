import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classNames from 'classnames'
import { isCompatible, register, unregister, getRegistration } from 'service-worker/registration'
import Observer from '@researchgate/react-intersection-observer'

import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIframe } from 'mdbreact'

import ToggleButton from './toggle-button'
import styles from './index.module.css'
import IPFSearchIframe from '../search'

const scrollToComponent = typeof window !== 'undefined' && require('react-scroll-to-component')
const defaultScrollOptions = { offset: 0, align: 'bottom', duration: 600 }

const { createProxyClient } = require('service-worker-gateway/node_modules/ipfs-postmsg-proxy')

class GatewaySection extends Component {
  state = {
    isActive: false,
    inView: false,
    incompatible: false,
    inProgress: false,
    isMessageVisible: true,
    GatewaySvgAnimation: null,
    iRecord: null
  }

  componentDidMount () {
    Promise.all([
      // Dynamic import to optimize both TTFP (Time To First Paint) and page load
      import(/* webpackChunkName: "gateway" */'./gateway-svg-animation').catch(console.error),
      getRegistration().catch(console.error)
    ]).then(([{ default: GatewaySvgAnimation } = {}, registration]) => {
      this.setState({
        isActive: Boolean(registration),
        GatewaySvgAnimation
      })

      document.querySelector('#serviceWorkerButton').click()
    })

    this.setState({ incompatible: !isCompatible() })
  }

  componentWillUnmount () {
    clearTimeout(this.scrollTimeout)
  }

  componentDidUpdate (prevProps, prevState) {
    if ((!prevState.isActive && this.state.isActive) && this.state.inView) {
      this.scrollTimeout = setTimeout(() => {
        scrollToComponent(this.sectionContainerRef, defaultScrollOptions)
      }, 2300)
    }
  }

  render () {
    const { isActive, inView, incompatible, inProgress, isMessageVisible, GatewaySvgAnimation } = this.state
    const contentClasses = classNames(styles.content, {
      [styles.active]: isActive
    })

    return (
      <div>
        <div className={ styles.container } ref={ this.handleContainerRef }>
          <div className={ contentClasses }>
            <MDBContainer>
              <MDBCard>
                <MDBCardBody>
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput hint="<iRecord@ipfs> e.g. js.ipfs.io" getValue={ this.handleIwant } />
                      </MDBCol>
                      <MDBCol md="1">
                        <MDBBtn onClick={ this.handleIRecordGo }>Go</MDBBtn>
                      </MDBCol>
                      <MDBCol md="1" />
                      <MDBCol md="1">
                        <MDBBtn onClick={ this.fetchIRecord }>Update</MDBBtn>
                      </MDBCol>
                      <MDBCol md="1" />
                      <MDBCol md="2">
                        <IPFSearchIframe />
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
            <div className={ styles.gatewayContainer }>
              { GatewaySvgAnimation &&
                <Observer onChange={ this.handleObserverChange }>
                  <GatewaySvgAnimation
                    isActive={ isActive }
                    inView={ inView }
                    isMessageVisible={ isMessageVisible }
                    onMessageCloseClick={ this.handleCloseClick }
                  />
                </Observer>
              }
            </div>
            <ToggleButton
              id="serviceWorkerButton"
              isActive={ isActive }
              onClick={ this.handleToggleClick }
              className={ styles.toggle }
              incompatible={ incompatible }
              inProgress={ inProgress } />
            <ToastContainer
              className={ styles.toastContainer }
              transition={ Slide }
              pauseOnHover={ false } />
          </div>
        </div>
        <div className={ styles.container }>
          <iframe height="363" width="100%" src="https://ddrop.edening.net"></iframe>
        </div>
        <div className={ styles.container }>
          <iframe height="600" width="100%" src="https://ipfs-search.com"></iframe>
        </div>
      </div>
    )
  }

  handleCloseClick = () => {
    this.setState({ isMessageVisible: false })
  }

  handleContainerRef = (element) => {
    this.sectionContainerRef = element
  }

  handleToggleClick = () => {
    const { messages } = this.props.intl

    // Can't activate service-worker if serving from `/ipfs/xxx` or `/ipns/xxx` because
    // it must be served from the root
    /*if (/^\/(?:ipfs|ipns)\/[^/]+/.test(window.location.pathname)) {
      return toast.warning(messages.magic.nonRootScopeWarningMessage)
    }*/

    const { isActive } = this.state

    this.setState({ inProgress: true })

    if (isActive) {
      unregister()
        .then(() => {
          this.setState({ isActive: false, isMessageVisible: true })
        })
        .catch(() => toast.error(messages.magic.deactivationErrorMessage))
        .finally(() => this.setState({ inProgress: false }))
    } else {
      register()
        .then(() => {
          createProxyClient({
            addListener: navigator.serviceWorker.addEventListener.bind(navigator.serviceWorker),
            postMessage: (data) => navigator.serviceWorker.controller.postMessage(data)
          })

          this.setState({ isActive: true })

          this.state.iRecord = {
            iWant: 'js.ipfs.io',
            iTrust: {
              'ipns': ['*.ipfs.io']
            }
          }
        })
        .catch(() => toast.error(messages.magic.activationErrorMessage))
        .finally(() => this.setState({ inProgress: false }))
    }
  }

  handleObserverChange = ({ isIntersecting }) => this.setState({ inView: isIntersecting })

  handleIwant = (event) => {
    if(!event.type && this.state.iRecord) {
      this.state.iRecord.iWant = event
    }
  }

  handleIRecordGo = (event) => {
    if(this.state.iRecord && this.state.iRecord.iWant) {
      window.open(window.location.origin + '/ipns/' + this.state.iRecord.iWant)

      return
    }

    fetchIRecord() // Syncing and Retry with iRecord
    .then(() => {
      handleIRecordGo()
    })

    search(event) // Google-alike search, Personal-generated content space(indexes), [IPFS-Search](https://github.com/ipfs-search)?
    .then((res) => {
      show(res)
    })
  }

  fetchIRecord = () => {
    return new Promise((resolve, reject) => {
      fetch('/irecord/')
      .then((result) => {
        if(result.ok) {
          result
          .json()
          .then((data) => {
            console.log('Fetched iRecord: ' + JSON.stringify(data))
            resolve(data)
          })
        }
      }, (reason) => {
        toast.error('Error fetching iRecord: ' + reason)
        reject(reason)
      })
      .catch(err => {        
        toast.error('Error fetching iRecord: ' + err)
        reject(err)
      })
    })
    .then((iRecord) => {
      this.state.iRecord = iRecord

      toast.warning('Updated iRecord: ' + JSON.stringify(iRecord))
    }, (reason) => {
      toast.error('Error Updating iRecord: ' + reason)
    })
  }

  search = (event) => {
    if(!event.type) {
      console.log('Searching for: ' + event + ' ...')

      return new Promise((event) => {
        // TODO: Implementation
      })
    }

    return new Promise(() => {
      console.log('Placeholder for Search!!!')
    })
  }

}

export default injectIntl(GatewaySection)
