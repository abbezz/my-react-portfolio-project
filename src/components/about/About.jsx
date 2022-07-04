import "./about.css";
import Award from "../../img/award.png";






const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="src\img\me.jpg" alt=""/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
       
        <p className="a-desc">
        I'm currently studying web development with the University of Birmingham Coding Bootcamp. I'm enjoying my course and have a strong believe I will be enjoying my future career as a web developer. 

I have so far gained excellent knowledge of HTML, CSS Git and JavaScript, Node js Express js. I'm Developing my skills and knowledge more through every coursework that I deliver. I have improved my communication skills in presenting my work through projects within the course.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
         
         
            
          </div>
        </div>
      </div>
  );
};


export default About;




  


      
      
  
  
  
