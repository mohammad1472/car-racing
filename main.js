canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//nasa_mars_images_array = ["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","mars.jpg", "nasa_image_3.jpg","nasa_image_4.jpg"];
//random_number = Math.floor(Math.random()*4);
//console.log(random_number);

car_1_width = 100;
car_1_height = 90;

car_2_width = 100;
car_2_height = 90;


 
//background_image = nasa_mars_images_array[random_number];
//console.log("background_image = " + background_image);
 
car_1_image = "car1.png";
car_2_image = "car2.png";
background_image = "racing (1).jpg";

car_1_x = 10;
car_1_y = 10;

car_2_x = 30;
car_2_y = 30;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;



    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadrover;
    car_1_imgTag.src = car_1_image;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadrover;
    car_2_imgTag.src = car_2_image;



}


function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height );
}

function uploadcar_1(){
    
    ctx.drawImage(car_1_imgTag,car_1_x,car_1_y,car_1_width,car_1_height);
}
function uploadcar_2(){
    
    ctx.drawImage(car_2_imgTag,car_2_x,car_2_y,car_2_width,car_2_height);
}


window.addEventListener("keydown", my_keydown);
 function my_keydown(e) 
 { 
     keyPressed = e.keyCode; console.log(keyPressed); 
     if(keyPressed == '38')
      { 
          up(); console.log("up");
     }
      if(keyPressed == '40') { down();
         console.log("down");
         } 
         if(keyPressed == '37') { left();
             console.log("left"); } if(keyPressed == '39') 
             { 
                 right();
                 console.log("right");
                 } 
                }


                function up()
                 { 
                     if(car_1_y >=0) 
                     { 
                         car_1_y = car_1_y - 10;

                          console.log("When up arrow is pressed, x = " + car_1_x + " | y = " +car_1_y);
                           uploadBackground();
                            uploadcar_1();
                         } 
                        } 

                        function down()
                         { 
                             if(car_1_y <=500)
                              { 
                                  car_1_y =car_1_y+ 10; console.log("When down arrow is pressed, x = " + car_1_x + " | y = " +car_1_y);
                                   uploadBackground();
                                    uploadcar_1();
                                 } 
                                } 
                                function left() 
                                { 
                                    if(car_1_x >= 0)
                                     { 
                                        car_1_x =car_1_x - 10; 
                                        console.log("When left arrow is pressed, x = " + car_1_x + " | y = " +car_1_y); 
                                        uploadBackground();
                                         uploadcar_1(); 
                                    } 
                                } 
                                function right() 
                                { 
                                    if(car_1_x <= 700)
                                     { car_1_x =car_1_x + 10; 
                                        console.log("When right arrow is pressed, x = " + car_1_x + " | y = " +car_1_y); 
                                        uploadBackground(); 
                                        uploadcar_1(); 
                                    } 
                                }


                                function up()
                 { 
                     if(car_2_y >=0) 
                     { 
                         car_2_y = car_2_y - 10;

                          console.log("When up arrow is pressed, x = " + car_2_x + " | y = " +car_2_y);
                           uploadBackground();
                            uploadcar_2();
                         } 
                        } 

                        function down()
                         { 
                             if(car_1_y <=500)
                              { 
                                  car_2_y =car_2_y+ 10; console.log("When down arrow is pressed, x = " + car_2_x + " | y = " +car_2_y);
                                   uploadBackground();
                                    uploadcar_2();
                                 } 
                                } 
                                function left() 
                                { 
                                    if(car_1_x >= 0)
                                     { 
                                        car_2_x =car_2_x - 10; 
                                        console.log("When left arrow is pressed, x = " + car_2_x + " | y = " +car_2_y); 
                                        uploadBackground();
                                         uploadcar_1(); 
                                    } 
                                } 
                                function right() 
                                { 
                                    if(car_2_x <= 700)
                                     { car_1_x =car_2_x + 10; 
                                        console.log("When right arrow is pressed, x = " + car_2_x + " | y = " +car_2_y); 
                                        uploadBackground(); 
                                        uploadcar_2(); 
                                    } 
                                }
                
                
                
