import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public tick = "";
  public tickRender = "";
  public editor = ClassicEditor;

  onTick(kind: string): void {
    this.renderStock(kind);
  }

  renderStock(newChar: string): void {
    var temp = this.tick;
    if(temp.charCodeAt(temp.length-1) == (newChar.charCodeAt(0) - 1)){
      this.tickRender += newChar;
      this.tick += newChar;
    } else if (newChar == "A") {
      this.tickRender += " " + newChar;
      this.tick += newChar;
    }
    this.tickRender = this.tickRender.replace(/<del>/gi,"");
    this.tickRender = this.tickRender.replace(/<\/del>/gi,"");
    this.tickRender = this.tickRender.replace(/ABC/gi,"<del>ABC</del>");  
  }
}