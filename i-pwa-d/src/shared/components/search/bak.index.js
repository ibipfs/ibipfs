import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classNames from 'classnames'
import Observer from '@researchgate/react-intersection-observer'

import ToggleButton from './toggle-button'
import styles from './index.module.css'

import { MDBCard, MDBCardBody, MDBCardText, MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact'

const scrollToComponent = typeof window !== 'undefined' && require('react-scroll-to-component')
const defaultScrollOptions = { offset: 0, align: 'bottom', duration: 600 }

class SearchSection extends Component {
  state = {
    isActive: false,
    inView: false,
    incompatible: false,
    inProgress: false,
    isMessageVisible: true,
    SearchSvgAnimation: null,
    iRecord: null
  }

  componentDidMount () {
    Promise.all([
      // Dynamic import to optimize both TTFP (Time To First Paint) and page load
      import(/* webpackChunkName: "search" */'./search-svg-animation').catch(console.error)
    ]).then(([{ default: SearchSvgAnimation } = {}]) => {
      this.state.iRecord = {
        iWant: 'js.ipfs.io',
        iTrust: {
          'ipns': ['*.ipfs.io']
        }
      }

      this.setState({
        isActive: Boolean(registration),
        SearchSvgAnimation
      })
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
    const { isActive, inView, incompatible, inProgress, isMessageVisible, SearchSvgAnimation } = this.state
    const contentClasses = classNames(styles.content, {
      [styles.active]: isActive
    })

    return (
      <div className={ styles.container } ref={ this.handleContainerRef }>
        <div className={ contentClasses }>
          <h1>Search</h1>
            <MDBCard>
              <MDBCardBody>
                <MDBCardText>This is where magic happens!</MDBCardText>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="9">
                      <MDBInput hint="<iRecord@ipfs> e.g. js.ipfs.io" getValue={ this.handleIwant }/>
                    </MDBCol>
                    <MDBCol md="1">
                      <MDBBtn onClick={ this.handleIRecordGo }>Go</MDBBtn>
                    </MDBCol>
                    <MDBCol md="1">
                      <MDBBtn onClick={ this.fetchIRecord }>Update</MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBCardBody>
            </MDBCard>
          <div className={ styles.searchContainer }>
            { SearchSvgAnimation &&
              <Observer onChange={ this.handleObserverChange }>
                <SearchSvgAnimation
                  isActive={ isActive }
                  inView={ inView }
                  isMessageVisible={ isMessageVisible }
                  onMessageCloseClick={ this.handleCloseClick }
                />
              </Observer>
            }
          </div>
          <ToastContainer
            className={ styles.toastContainer }
            transition={ Slide }
            pauseOnHover={ false } />
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

export default injectIntl(SearchSection)
