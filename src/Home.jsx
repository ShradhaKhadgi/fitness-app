import React from "react";
const Home = () =>
{
    return(
        <>
        <div className="middle_section">
        <div className="ms_img">   
        <img src="images/img1.jpeg" alt="fitness-image"/>
        </div>
        <div className="ms_text"> 
        <h2>Welcome to <span style={{color: "#5990E0"}}>Fitness App</span></h2><br/>
        <p>Getting started in fitness is exciting and full of challenges. It is a great step to improving your health and the quality of your life. The key is to identify your goals and keep them in mind as you move forward.
        </p><br/>
        <a href="#check" className="ms_btn">Read more</a>
        </div>
        </div>
        <div id="check">
        <h1>Benefits of fitness</h1>
        <div className="div">
        <div className="div_text">
        <ul>
            <li><strong>Help you control your weight.</strong> Along with diet, exercise plays an important role in controlling your weight and preventing obesity. To maintain your weight, the calories you eat and drink must equal the energy you burn. To lose weight, you must use more calories than you eat and drink.</li>
            <li><strong>Reduce your risk of heart diseases.</strong> Exercise strengthens your heart and improves your circulation. The increased blood flow raises the oxygen levels in your body. This helps lower your risk of heart diseases such as high cholesterol, coronary artery disease, and heart attack. Regular exercise can also lower your blood pressure and triglyceride levels.</li>
            <li><strong>Help your body manage blood sugar and insulin levels.</strong> Exercise can lower your blood sugar level and help your insulin work better. This can cut down your risk for metabolic syndrome and type 2 diabetes. And if you already have one of those diseases, exercise can help you to manage it.</li>
            <li><strong>Help you quit smoking.</strong> Exercise may make it easier to quit smoking by reducing your cravings and withdrawal symptoms. It can also help limit the weight you might gain when you stop smoking.</li>
            <li><strong>Improve your mental health and mood.</strong> During exercise, your body releases chemicals that can improve your mood and make you feel more relaxed. This can help you deal with stress and reduce your risk of depression.</li>
            <li><strong>Help keep your thinking, learning, and judgment skills sharp as you age.</strong> Exercise stimulates your body to release proteins and other chemicals that improve the structure and function of your brain.</li>
            <li><strong>Strengthen your bones and muscles.</strong> Regular exercise can help kids and teens build strong bones. Later in life, it can also slow the loss of bone density that comes with age. Doing muscle-strengthening activities can help you increase or maintain your muscle mass and strength.</li>
            <li><strong>Reduce your risk of some cancers,</strong> including colon, breast , uterine, and lung cancer.</li>
            <li><strong>Reduce your risk of falls.</strong> For older adults, research shows that doing balance and muscle-strengthening activities in addition to moderate-intensity aerobic activity can help reduce your risk of falling.</li>
            <li><strong>Improve your sleep.</strong> Exercise can help you to fall asleep faster and stay asleep longer.</li>
            <li><strong>Increase your chances of living longer.</strong> Studies show that physical activity can reduce your risk of dying early from the leading causes of death, like heart disease and some cancers.</li>
        </ul>    
        </div>
        <div className="div_img1"> 
        <img src="images/img2.jpg" alt="fitness-image"/>
        </div>
        </div>
        <h1 style={{margin: "15% 0 10% 0"}}>Why Exercise? </h1>
        <div className="div">    
        <div className="div_text">
        <ul>
            <li>Regular exercise has been shown to improve your health significantly.</li><br/>
            <li>Its primary benefits include helping you achieve and maintain a healthy body weight and muscle mass and reducing your risk for chronic diseases.</li><br/>
            <li>Additionally, research has shown that exercise can lift your mood, boost your mental health, help you sleep better, and even enhance your sex life.</li><br/>
            <li>And that’s not all. It can also help you maintain good energy levels.</li><br/>
            <li>In short, exercise is powerful and can help improve your life.</li><br/>
        </ul>
        </div>
        <div className="div_img2">
        <img src="images/img3.jpg" alt="fitness-image"/>
        </div>
        </div>
        </div>
       
        </>
    );

}
export default Home;