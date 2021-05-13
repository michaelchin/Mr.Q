import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Layout from '../components/Layout'
//import Features from '../components/Features'
import LatestNews from '../components/LatestNews'
import Content, { HTMLContent } from '../components/Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faClipboard, faCheckCircle ,faStar} from '@fortawesome/free-solid-svg-icons'

import QRCodeImg from '../img/mm_facetoface_collect_qrcode_1600503554936.png'
import logo from '../img/logo.svg'
import nameLogo from '../img/name-logo.png'
import qxd from '../img/qxd.png'
import nanYangZhiNan from '../img/nan_yang_zhi_nan.png'
import qingShanYiYu from '../img/qing_shan_yi_yu.png'
import pygplatesLogo from '../img/sunflower.jpg' 
import portalScreenshot from '../img/sunflower.jpg'
import gwsScreenshot from '../img/sunflower.jpg'

function drag_start(event) {
    event.stopPropagation();
    console.log(event.currentTarget.id);
    event.dataTransfer.setData("text/plain", event.clientX + ',' + event.clientY + ',' + event.currentTarget.id);
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var e_data = event.dataTransfer.getData("text/plain").split(',');
    
    var dm = document.getElementById(e_data[2]);
    if(!dm.style.left){
      //dm.style.left=0;
    }
    if(!dm.style.top){
      //dm.style.top=0;
    }
    console.log(dm.offsetLeft)
    dm.style.left = parseInt(dm.offsetLeft) + (event.clientX - parseInt(e_data[0],10)) + 'px';
    dm.style.top = parseInt(dm.offsetTop) + (event.clientY - parseInt(e_data[1],10)) + 'px';
    
    event.preventDefault();
    return false;
} 


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  descMarkdown
}) => (
  <div>
    <div 
      className="full-width-image margin-top-0 gp-header"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: 'fixed',
        textAlign: `center`,
        //minHeight: `700px`,
        height: '100vh',
        position: 'relative'
      }}
      onDrop={drop} 
      onDragOver={drag_over}
    >
      <div className="gp-hidden-ctl" style={{position: 'absolute', top:'0', height:'0', width:'0', zIndex:'100', 
        borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid white'}}>
      </div>
      <div className="tint">
      </div>
      <div className="container middle-content" style={{zIndex:'10'}}> 
        <div className="columns section ">       
          <a href="/news" style={{ margin:'auto'}}><img src={nameLogo} alt="nameLogo"  /></a>
        </div>
      </div>
      <div className="qingShanYiYu" id="qingShanYiYu" draggable="true" onDragStart={drag_start} >
        <a href="/news" style={{ margin:'auto'}}><img src={qingShanYiYu} alt="qingShanYiYu" /></a>
      </div>
      <div className="nanYangZhiNan" id="nanYangZhiNan" draggable="true" onDragStart={drag_start}>
        <a href="/news" style={{ margin:'auto'}}><img src={nanYangZhiNan} alt="nanYangZhiNan" /></a>
      </div>
      <div className="qxd" id="qxd" draggable="true" onDragStart={drag_start}>
        <a href="/news" style={{ margin:'auto'}}><img src={qxd} alt="qxd" /></a>
      </div>
    </div>

    <h1 className="mc-title title">为啥要布施给Q生？</h1>

    {/*start of the first section*/}
    <div className="container-fliud box" style={{backgroundColor: 'whitesmoke'}}>
      <div className="container">      
        <div className="column is-12">
         
            <div className="columns section"> 
              <div className="column is-4" >  
                <div style={{position: 'relative', paddingBottom: '75%'}}>
                  <iframe style={{
                    position: 'absolute',left:'0px', top:'0px'
                    }} 
                    width="100%" height="100%" src="https://www.youtube.com/embed/KkYOTa-6MBU?autoplay=1&;mute=1&;loop=1&;rel=0&;showinfo=0&color=white&iv_load_policy=3&playlist=KkYOTa-6MBU" frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
                </div>
              </div>
              <div className="column is-8">
                <div style={{marginLeft:'.5rem', fontSize:'140%'}}>
                  {intro.reasons.map((reason) => (
                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>{reason.text}</span>
                    </p>
                  ))}
                  <div style={{textAlign:'center', marginTop:'3rem'}}>
                    <button className="button is-small is-success">
                      <span className="icon"> <FontAwesomeIcon icon={faClipboard} className="fa-spin" /></span>
                      <span>查看更多</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    {/*end of the first section*/}

    {/*start of the second section*/}
    <div className="container-fliud">
      <div className="container">      
        <div className="column is-12">
         
            <div className="columns section">
              <div className="column is-5">    
                <img
                  src={QRCodeImg}
                  alt="Why GPlates Image"
                  style={{  }}
                /> 
              </div>
              <div className="column is-7">
                <div className="tile">
                  <h1 className="mc-title title">Why GPlates?</h1>
                </div>
                <div className="tile">
                  <div className="content" style={{fontSize:"larger"}}>
                    <br></br>
                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>Open source and free</span>
                    </p>

                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>Easy to use</span>
                    </p>

                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>Fast and reliable</span>
                    </p>

                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>Renowned researchers and scientists </span>
                    </p>

                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>Professional software dev team</span>
                    </p>

                    <p>
                      <span className="icon" style={{verticalAlign: 'middle', color: 'green'}}> 
                        <FontAwesomeIcon icon={faCheckCircle} className="svg-inline--fa fa-check-circle fa-w-16 fa-7x"/>
                      </span>
                      <span style={{verticalAlign: 'middle', marginLeft: '1rem'}}>Proudly made in Australia in cooperation with EU and USA</span>
                    </p>

                  </div>
                </div>
              </div> 
            </div>
        </div>
      </div>
    </div>
    {/*end of the second section*/}

    <div className="container">
      <div className="column is-12 is-offset-0">

        <div className="column is-12">
          <article className="message mc-message">
            <div className="message-body">
              <strong>Citation:</strong><br></br>
              <cite> Müller, R. D., Cannon, J., Qin, X., Watson, R. J., Gurnis, M., Williams, S., et al. 2018. 
                GPlates: Building a virtual Earth through deep time. Geochemistry, Geophysics, Geosystems, 19. doi:10.1029/2018GC007584.
              </cite>
              <br></br><br></br>
              <div style={{textAlign:'center'}}>
                <CopyToClipboard text="Müller, R. D., Cannon, J., Qin, X., Watson, R. J., Gurnis, M., Williams, S., et al. 2018. GPlates: Building a virtual Earth through deep time. Geochemistry, Geophysics, Geosystems, 19. doi:10.1029/2018GC007584.">
                  <button className="button is-small is-success"><span className="icon"> <FontAwesomeIcon icon={faClipboard} className="fa-spin" /></span>
                  <span>Copy the citation to clipboard</span></button>
                </CopyToClipboard>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
       
    {/* start of gplates family section */}
    <div className="container-fliud" style={{}}>
      <div className="container">     
        <div className="column is-12 is-offset-0">
          <div className="column is-12">
            <div style={{padding: '0'}}>  
              <h3 className="has-text-weight-semibold is-size-3" style={{ textAlign: 'center'}}>
                GPlates Family
              </h3>
          
              <div className="columns section is-multiline">

                {/*start of pygplates section*/}
                <div className="column is-4" 
                  style={{
                    textAlign:'center',
                    position:'relative'
                  }}
                >
                  <h3 style={{display:'none'}}><a className="mc-a" href="https://www.gplates.org/docs/pygplates/" target="_blank" rel="noreferrer">pyGPlates</a></h3> 
                  <div className="mc-card-container box">
                    <div style={{position: 'relative'}}>
                      
                      <div style={{overflow:"hidden"}}>
                        <img src={pygplatesLogo} alt="pyGPlates Screenshot" />
                      </div>

                      <a className="mc-a" href="https://www.gplates.org/docs/pygplates/" target="_blank" rel="noreferrer">
                        <div className="mc-card-overlay">
                          <div className="mc-overlay-text">https://www.gplates.org/docs/pygplates/</div>
                        </div>
                      </a>
                    </div>
                    <div style={{textAlign:'left', flex:'1'}}>
                      The <b>GPlates Python library (pyGPlates)</b> enables access to GPlates functionality via the Python programming language. 
                    </div>
                    <div style={{}} >
                      <br></br>
                      <a className="button is-link is-small" href="https://www.gplates.org/docs/pygplates/" >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                {/*end of pygplates section*/}

                {/*start of portal section*/}
                <div className="column is-4" style={{textAlign:'center', position:'relative'}}>
                  <h3 style={{display:'none'}}><a className="mc-a" href="https://portal.gplates.org/" target="_blank" rel="noreferrer">GPlates Portal</a></h3> 
                  <div className="mc-card-container box">
                    <div style={{position: 'relative'}}>

                      <div style={{overflow:"hidden"}}>
                        <img src={portalScreenshot} alt="GPlates Portal Screenshot"></img>
                      </div>
          
                      <a className="mc-a" href="https://portal.gplates.org/" target="_blank" rel="noreferrer">
                        <div className="mc-card-overlay">
                          <div className="mc-overlay-text">https://portal.gplates.org/</div>
                        </div>
                      </a>
                    </div>
                    <div style={{textAlign:'left',flex:'1'}}>
                      The <b>GPlates Web Portal</b> is a gateway to a series of web pages for the interactive visualisation of cutting-edge geoscience datasets.
                    </div>
                    <div style={{}} >
                      <br></br>
                      <a className="button is-link is-small" href="https://portal.gplates.org/" >
                        Learn More
                      </a>
                    </div>  
                  </div>
                </div>
                {/*end of portal section*/}

                {/* start of gws card */}
                <div className="column is-4" style={{textAlign:'center', position:'relative'}}>
                  <h3 style={{display:'none'}}><a className="mc-a" href="https://gws.gplates.org/" target="_blank" rel="noreferrer">GPlates Web Services</a></h3>
                  <div className="mc-card-container box">
                    <div style={{position: 'relative'}}>

                      <div style={{overflow:"hidden"}}>
                        <img src={gwsScreenshot} alt="GPlates Web Service Screenshot"/>
                      </div> 

                      <a className="mc-a" href="https://gws.gplates.org/" target="_blank" rel="noreferrer">
                        <div className="mc-card-overlay">
                          <div className="mc-overlay-text">https://gws.gplates.org/</div>
                        </div>
                      </a>
                    </div >
                    <div style={{textAlign:'left', flex:'1'}}>
                      The <b>GPlates Web Service</b> interface allows users to access plate tectonics reconstruction services via Internet. 
                    </div>
                    <div style={{}} >
                      <br></br>
                      <a className="button is-link is-small" href="https://gws.gplates.org/" >
                        Learn More
                      </a>
                    </div>
                  </div> 
                </div> 
                {/* end of gws card */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end of gplates family section */}

    {/* start of latest news section */}   
    <div className="container">
      <div className="column is-12 is-offset-0">
        <div className="column is-12">
          <hr></hr>
          <h3 className="has-text-weight-semibold is-size-3">
            Latest News
          </h3>
          <br></br>
          <LatestNews />
          <div className="column is-12 has-text-centered">
            <Link className="button is-primary" to="/news">
              More News
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* end of latest news section */}

  </div>    
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  descMarkdown: PropTypes.object,
  intro: PropTypes.shape({
    reasons: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        descMarkdown={frontmatter.descMarkdown}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        descMarkdown {
          childMarkdownRemark {
            html
          }
        }
        intro {
          reasons {
            text
          }
          heading
          description
        }
      }
    }
  }
`
