import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offLine';
    counter = 0;
    meatName = "肉类";
    vegName = "蔬菜";
    res: string
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];


    porkPicked(){
      this.meatName = '猪肉';
    }

    beefPicked(){
      this.meatName = '牛肉';
    }

    chickenPicked(){
      this.meatName = '鸡肉';
    }

    carrotPicked(){
      this.vegName = '萝卜';
    }

    tomatoPicked(){
      this.vegName = '番茄';
    }

    potatoPicked(){
      this.vegName = '土豆';
    }

    mixThem(){
      if (this.meatName == "猪肉" && this.vegName == "萝卜"){
        this.res = "黑暗料理";
      }
      else if (this.meatName == "牛肉" && this.vegName == "萝卜"){
        this.res = "萝卜顿牛腩";
      }

    }



    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }
}
