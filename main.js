const styles = {
    colors: ["lightblue", "orange", "hotpink", "lightgreen", "black"],
    fontSize: "50px",
    display: false, // ???? 
    alignment: "center",
    padding: "20px",
    changeText() { // objectas/methodas/func
      const phrases = ["Hi there", "Welcome!", "Weekend is coming", "Noice"];
      const randIndex = Math.floor(Math.random() * phrases.length);
      return phrases[randIndex];
    },
  };
//variables
const bodyStyling = document.querySelector(`body`);
const dynamicText = document.querySelector('#dynamicText');
const toggleButton = document.querySelector('#toggleButton');
const newText = styles.changeText(); 
///css button center fixed / SHAME SHAME SHAME

dynamicText.style.cssText = "font-size: 50px; alignment: center; padding: 20px;" ; 
toggleButton.style.cssText = "cursor: pointer; font-size: 50px; margin-top: 55px; padding: 20px; background-color: chocolate; border-radius: 10px;" ;
bodyStyling.style.cssText = "display: grid; grid-template-columns: 33%; justify-content: center; text-align: center;"

toggleButton.addEventListener('click', () => {  
// main function 
// cia styles.colors.slice(-1).length tinka, bet man pirmaiu sove i galva ir lengviau su -1. array methodai kazkaip...PATIKRINT
function changeBackgroundColor() {
  const randomColorIndex = Math.floor(Math.random() * styles.colors.length);
    if (randomColorIndex === 4){
      dynamicText.style.color = styles.colors[Math.floor(Math.random() * (styles.colors.length - 1))]; 
    } else {
      dynamicText.style.color = `black`;
    }
    return styles.colors[randomColorIndex];
  }
  // coloring
  
  dynamicText.style.backgroundColor = changeBackgroundColor();   


  // Jeigu false tai display: none, kitas click bus true ir display: block
  if (styles.display) {
      dynamicText.style.display = 'none';
      styles.display = false;
  } else {
      dynamicText.style.display = 'block';
      styles.display = true;
      dynamicText.textContent = newText;
  }
});
  

