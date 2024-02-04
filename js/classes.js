    class Player {
        constructor(elementId,width,height,x,y,) {
          //this is the player element
          this.element = document.getElementById(elementId);
          //this is the size of the player character
          this.width = width
          this.height = height
  
          //this is the position of the player
          this.x = x
          this.y = y
  
          //the number of lives the player has
          this.lives = 3;
  
          //player bullets?
          this.bullets=[];
        
        }
  
        moveLeft(){
  
        }
  
        moveRight(){
  
        }
  
        fireBullet(){
  
        }
      }
  
  
      class Invader {
        constructor(invaderElement, x,y,width,height){
          this.element = invaderElement;
          //initalize other properties
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
  
        }
  
        move(){
  
        }
  
        draw() {
          this.element.style.left = this.x + 'x';
          this.element.style.top = this.y + 'y';
          this.image.width/30, this.image.height/30
        }
  
        fireBullet(){
  
        }
  
      }
  
  
  
    //initalise the players
    let player = new Player('player',50,50,100,100);
  
    //Create the invaders
    let invaderElements = document.getElementsByClassName('invader');
  
    //initalise the invaders
    let invaders = Array.from(invaderElements).map( invaderElement => new Invader(invaderElement, 50,50,30,30));














    // ignore this

        //   // Defines a general class used to specify game objects.
    //   class GameObject {
    //     constructor(x, y, width, height) {
    //       // Define the object's position
    //       this.x = x;
    //       this.y = y;

    //       // Define the object's size
    //       this.width = width;
    //       this.height = height;
    //     }



    //             // Draw the object on the canvas
    //             draw(ctx) {
    //                 ctx.fillRect(this.x, this.y, this.width, this.height);
    //               }
          
    //               // Update the object's position
    //               update(dx, dy) {
    //                 this.x += dx;
    //                 this.y += dy;
    //               }
          
    //               // Check if the object is colliding with another object
    //               collidesWith(obj) {
    //                 return (this.x < obj.x + obj.width
    //                      && this.x + this.width > obj.x
    //                      && this.y < obj.y + obj.height 
    //                      && this.y + this.height > obj.y);
    //               }
    // }


    //       // The bullet class defines the properties and behavior of bullets.
    //       class Bullet extends GameObject {
    //         constructor(x, y, width, height, dy) {
    //           super(x, y, width, height, color);
    //           // Set the bullet's y direction.
    //           this.dy = dy;
    //         }
            
    //         update(dx, dy) {
    //           this.y += this.dy; 
    //         }
    //       }
          

    // // The spaceship class defines the general properties and behavior of the player and enemies.
    //   class SpaceShip extends GameObject {
    //     constructor(x, y, width, height, color, canvasHeight) {
    //       super(x, y, width, height, color);
    //       // Set canvas height. -> not sure what canvasHeight does?
    //       this.canvasHeight = canvasHeight;
    //       // Set the spaceship's bullet size.
    //       this.bulletWidth = 4;
    //       this.bulletHeight = 8;
    //       // Set the spaceship's bullet color.
    //       this.bulletColor = "#ff7800";
    //       // Bullets fired by the spaceship
    //       this.bullets = [];
    //     }

    // }
