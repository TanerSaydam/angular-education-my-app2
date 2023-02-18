import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TestComponent{
    number: number = 0;
    name: string = "";
    deneme: string = "Deneme 2";
    @ViewChild("inputElement") element2: ElementRef<HTMLInputElement> | undefined
    getInputValue(element: HTMLInputElement){
        //Javascript
        // let element:any = <HTMLInputElement>(document.getElementById("test"));        
        // console.log(element.value);

        //typescript
        console.log(element.value)
    }

    getInputValueByEvent(event:any){
        //console.log(event.target.value);
        console.log(this.element2?.nativeElement.value)
    }

    test(){
        let text = "asdasdasd";
        return text;
    }

    changeClass(){
        //console.log("changeClass çalıştı")
        if(this.number < 20)
            return "alert alert-danger"
        else if(this.number > 20 && this.number < 50)
            return "alert alert-info"
        else   
            return "alert alert-success"
    }
}