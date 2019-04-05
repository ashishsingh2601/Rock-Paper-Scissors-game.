# Rock-Paper-Scissors-game.
Made using HTML, CSS and JavaScript.
<!--HTML code-->
<!DOCTYPE html>
<html>
<head>
    <title>Rock Paper Scissors Game</title>
    
    <link rel="stylesheet" type="text/css" href="rps.css">
    </head>
<body>
    <header>
    <h1> Rock Paper Scissors</h1>
    </header>
   <marquee direction="right" behavior="alternate" >Game On! </marquee>
    <div class="score-board">
    <div id="user-lable" class="badge">user</div>
    <div id="computer-lable" class="badge">comp</div>
        <span id="user-score">0</span> :
        <span id="computer-score">0</span>
    
    </div>
   
    <div class="result">
        <p>Paper covers rock, you win!</p>
    
    </div>
    <div class="choices">
       <div class="choice" id="r"><img src="rocknew1.jpg" alt="rock">
        </div>
        <div class="choice" id="p"><img src="papernew.jpg" alt="paper"></div>
        <div class="choice" id="s"><img src="scissorsnew.jpg" alt="scissors"></div>
        
    
    
    </div>
    
   <marquee direction="left" behavior="alternate">  
    <p>Make your choice.</p>
    
    </marquee>
    
    <script src="project.js" charset="utf-8"></script>
    
    
    </body>

</html>

<!--CSS code starts here-->

@import url('https://fonts.googleapis.com/css?family=Germania+One');

*{
    margin:0;
    padding:0;

    
    
}

header{
    background-color: white;
    
}
header > h1{
    font-family: germania one;
    text-align: center;
    margin:0px;
    font-size:50px;
}

body{
    
    background-color: dimgrey;
}
.score-board{
    margin: 20px 200px;
    text-align: center;
    border: 3px solid white;
    padding: 10px 10px;
    font-family: germania one;
    position:relative;
}

.result{
    
    font-family: germania one;
    text-align: center;
    font-size: 20px;
    color: white;
    
}
.badge{
    background-color: brown;
    margin: 0px 30px;
    
    }
#user-lable{
    position:absolute;
    left:-50px;
    top:10px;
    
}

#computer-lable{
    position:absolute;
    right:-50px;
    
    
}
marquee{
    font-size: 30px;
    font-family: germania one;
    color= 
    
}
.choices{
    text-align: center;
    margin-top:0px;
    padding: 30px;
    position: sticky;
}

.choice{
    display: inline-block;
    border-radius: 70px;
    padding: 30px;
    border:3px solid;
    
}

.choice:hover{
    cursor: pointer;
    background-color: white;
    
    
}
.select{
    font-size: 20px;
    text-align: center;
    font-family: germania one;
    
}
.green-glow{
    border:3px solid #4dcc7d;
    box-shadow: 0 0 10px #31b431;
    
    
}
.red-glow{
    
    border: 3px solid #fc121b;
    box-shadow: 0 0 10px #d01115;
}
.grey-glow{
    
    border: 3px solid #464647;
    box-shadow: 0 0 10px #25292b;
}

