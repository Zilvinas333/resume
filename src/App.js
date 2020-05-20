import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialLinks from './components/SocialLinks';
import DivWithContent from './components/DivWithContent';
import InfoHeader from './components/InfoHeader';
import Badges from './components/Badges';
import ContactItem from './components/ContactItem';

const HeadName = () => {
  return <h1>SOPHIE ALPERT</h1>
}

const SubHead = () => {
  return <h2>PROGRAMMER</h2>
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__green">

        </div>
        <div className="header__name">
          <HeadName />
          <SubHead />
        </div>
      </header>
         
        <div className="info__line">
          
          <div className="info__link marginleft">

            <InfoHeader className="info__head">
              LINKS
            </InfoHeader>

            <SocialLinks className="info__link__item" childrenDivClass="info__link__img">
              Linkedin/username
            </SocialLinks>
            <SocialLinks className="info__link__item" childrenDivClass="info__link__img">
              Twitter/user-handle
            </SocialLinks>
            <SocialLinks className="info__link__item" childrenDivClass="info__link__img">
             GITHUB/username
            </SocialLinks>
            <SocialLinks className="info__link__item" childrenDivClass="info__link__img">
              BLOG/blog-name
            </SocialLinks>



          </div>
          <div className="info__about marginleft">
            <InfoHeader className="info__head">
                ABOUT ME
            </InfoHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta augue ac sollicitudin feugiat. In eu leo quis est congue pretium. Vestibulum eu euismod eros, nec porttitor lorem. Duis quis vestibulum neque, ac sagittis sapien. Pellentesque scelerisque neque sit amet urna aliquet, id sodales ipsum varius. Nunc eu orci finibus, porttitor tortor sed, mattis ex. Etiam congue, augue in molestie finibus, metus dui condimentum erat, ut tempus nibh ipsum quis dui. 
          </div>
        </div>
        

        <div className="info__line">
          <div className="info__education marginleft">
            <InfoHeader className="info__head">
              EDUCATION
            </InfoHeader>
           
            <DivWithContent className="info__education__item">
              SCHOOL NAME<br/>
              2009-2013<br/>
              Degree<br/>
            </DivWithContent>
            <DivWithContent className="info__education__item">
              SCHOOL NAME<br/>
              2009-2013<br/>
              Degree<br/>
            </DivWithContent>

          </div>
          <div className="info__personal marginleft">
            <InfoHeader className="info__head">
              PERSONAL SKILLS
            </InfoHeader>

            <Badges className="info__item green__item">
              TEAMWORK
            </Badges>
            <Badges className="info__item yellow__item">
              COMMUNICATION
            </Badges>
            <Badges className="info__item red__item">
              ORGANIZATION
            </Badges>
            
            
          </div>
          <div className="info__technical marginleft">
           <InfoHeader className="info__head">
              TECHNICAL SKILLS
            </InfoHeader>
            <Badges className="info__item green__item">
              HTML
            </Badges>
            <Badges className="info__item green__item">
              CSS
            </Badges>
            <Badges className="info__item yellow__item">
             JAVASCRIPT
            </Badges>
            <Badges className="info__item yellow__item">
              REACT.JS
            </Badges>

          </div>
        </div>
        

        <div className="experience">
            <InfoHeader className="info__head marginleft">
              WORK EXPERIENCE
            </InfoHeader>



          <div className="experience__line">
            <DivWithContent className="experience__pos marginleft">
              JOB POSITION<br/>
              Company<br/>
              2018-present<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta augue ac sollicitudin feugiat. In eu leo quis est congue pretium.
            </DivWithContent>
            <DivWithContent className="experience__pos marginleft">
              JOB POSITION<br/>
              Company<br/>
              2018-present<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta augue ac sollicitudin feugiat. In eu leo quis est congue pretium.
            </DivWithContent>
            <DivWithContent className="experience__pos marginleft">
              JOB POSITION<br/>
              Company<br/>
              2018-present<br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta augue ac sollicitudin feugiat. In eu leo quis est congue pretium.
            </DivWithContent>
            
          </div>
          
        </div>
        <div className="contact">
            <ContactItem
              className="contact__item marginleft"
              childrenDivClass="contact__head"
              head="ADDRESS"
              info="
                Adress Adress
              "
            >
            </ContactItem>
            <ContactItem
              className="contact__item marginleft"
              childrenDivClass="contact__head"
              head="CONTACT"
              info="
                Phone Phone
              "
            >
            </ContactItem>
            
            <ContactItem
              className="contact__item marginleft"
              childrenDivClass="contact__head"
              head="SOCIAL"
              info="
                Social Social
              "
            >
            </ContactItem>
            
          </div>

    </div>
  );
}

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>*/

export default App;
