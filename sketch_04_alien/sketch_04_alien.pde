import rita.*;

RiMarkov markov;
String line = "";
String[] files = { "2001.txt" };

void setup()
{
  size(800, 800);

  //fullScreen();

  fill(0);
  textFont(createFont("helvetica-bold", 80));

  // create a markov model w' n=3 from the files
  markov = new RiMarkov(2);
  markov.loadFrom(files, this);
}

void draw()
{
  background(0);
  fill(255);
  text(line, 50, 50, width-100, height-100);
}

void keyPressed()
{
  if (!markov.ready()) return;

  String[] lines = {""};
  for (int n = 0; n < 100; n++) {
    lines = markov.generateSentences(1);
    println(lines[0].length());
    if (lines[0].length() < 70) {
     break; 
    }
    
  }
  line = RiTa.join(lines, " ");
}
