var i=0,text;
  text = "Happy Birth Day"

  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,85);
    }
  }
  ketik();
  