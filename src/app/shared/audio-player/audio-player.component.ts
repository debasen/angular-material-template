import { animate, style, transition, trigger } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { ApplicationRef, ChangeDetectionStrategy, Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AnimationDurations, ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerComponent implements OnInit,DoCheck {
  @ViewChild('audioPlayer', {static: true}) playSongRef : ElementRef<HTMLAudioElement>;
  @ViewChild('playPauseButton', {static: true})buttonRef:ElementRef<HTMLSpanElement>;
  @ViewChild('table') table: MatTable<any>;
  rotateButton=false;
  playButtonState=true;
  ShowvolumControl=false;
  hideVolIcon=false;
  loopIconIndex=0;
  loopIcons = {
    0 : 'repeat',
    1 : 'repeat',
    2: 'repeat_one',
    3 : 'shuffle'};
  iconChangeOnClick="repeat";
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  songProgress:number;
  volume=30;
  currentSongPlaying:{
   albumArt:string,
   audio:string,
   artist:string,
   audio_name:string
  };
  playSong:HTMLAudioElement;
  showThumbOnHover=false;
  lastSliderPos : number;
  currentSliderPos : number;
  progress : number;
  slide = false;
  sliderPos = 0;
  songPos = 0;
  songPlaying:HTMLElement;
  disableButton_previous=false;
  disableButton_next=false;
  currentTimePlayedSong:number;
  isPlaying=false;
  boldIcon=false;
  randomIndex;
  visible=false;
  favoritedSong=false;
  favoritedSongsList=[];
  displayedColumns: string[]  = ['position','audio_name', 'artist', 'favorite'];
  // celsius;
//  farenht;
//  frnhtShow;
  // dataSource = audiod;
  constructor() { }
  ngDoCheck(): void {
    
    // this.playNext()
    //    console.log("ended")
      // this.playSong.load()
    //    this.playNext(this.currentSongPlaying)
    //    console.log(this.playSong)
    //   this.playSong.play()
    //  }
      // this.onPause()
      // this.pause()
      // this.playNext(this.currentSongPlaying)
      //  this.play()
    //   console.log("nxt song playin")
    // }
  }
 
  ngOnInit(): void {
    this.playSong = this.playSongRef.nativeElement;
    this.songPlaying=this.buttonRef.nativeElement;
    if(!this.currentSongPlaying)
    {
      this.currentSongPlaying=this.audioData[0]; 
    } 
  //  this.playSong=new Audio(this.currentSongPlaying.audio); 
  //  this.progresserCheck=this.playSong.currentTime/this.playSong.duration * 100
  }
  
  audioData=[{
    albumArt:'assets/images/di7y2l814yk11.jpg',
    audio:'assets/audio/bensound-cute.mp3',
    audio_name:'Afterworlds',
    artist:'Blear Moon'
  },
  {
    albumArt:'assets/images/coltrane.png',
    audio:'assets/audio/bensound-acousticbreeze.mp3',
    audio_name:'Broken Skin Overflowing',
    artist:'Daniel Birch'
  },
  {
    albumArt:'assets/images/In-Rainbows-v4.png',
    audio:'assets/audio/bensound-hey.mp3',
    audio_name:'Lockdown City (ID 1542)',
    artist:'Lobo Loco'
  }];
 
  showVolSlider(event){
    this.ShowvolumControl=true
    this.hideVolIcon=true
  }
  hideVolSlider($event){
    this.ShowvolumControl=false
    this.hideVolIcon=false
  }
  muteOnClick(){
    this.volume=0;
    this.playSong.volume=0.0;
  }
  fullVolOnClick(){
    this.volume=100;
    this.playSong.volume=1.0;
  }
  loopIconClicked(){
    this.loopIconIndex = this.loopIconIndex == 3 ? 0 : this.loopIconIndex+1;
    if(this.loopIconIndex>0){
      this.boldIcon=true
    }else{this.boldIcon=false
    }
  }
  onPlay(){
    this.isPlaying=true
  }
  onPause(){
    this.isPlaying=false
  }
  play(){
    this.onPause()
    if( this.playSong.paused && !this.isPlaying)
    {this.playButtonState=!this.playButtonState;
    this.playSong.src=this.currentSongPlaying.audio
    this.playSong.play();
    this.rotateButton=true;
    console.log(this.playSong.src)}
    else{
      this.onPlay()
      this.pause()
    }
  }
  pause(){
    // if (!this.playSong.paused && this.isPlaying) {
      this.playButtonState=true;
      this.playSong.pause();
      this.rotateButton=false;
      this.songPlaying.style.visibility="visible"
  // }
  }
  playPauseBtnShw(){
    if(!this.playButtonState){
      console.log('h', this.songPlaying.className)
       this.songPlaying.style.visibility="visible";
    }
  }
  playPauseBtnHide(){
    if(!this.playButtonState){
      console.log('hg', this.songPlaying.className)
       this.songPlaying.style.visibility="hidden";
    } 
  }
  volControl(){
    this.playSong.volume=this.volume/100
  }
  currentTime = (value : number) =>{
    // if(this.isPlaying==false){
    //   return "0:00"
    // }
    var audioPlayer = this.playSong;
    let time=audioPlayer.duration*value/100
    let elapsedMin= ~~((time % 3600) / 60)
    let elapsedSec:any= Math.ceil(time%60)
    if(elapsedSec<10){
      elapsedSec="0"+elapsedSec.toString()
      //  console.log(elapsedSec)
    }
    
    return elapsedMin+":"+elapsedSec
  }
  
  console(){
    console.log("check")
  }
  playPrevious(currentSong){
    this.playSong.load()
    this.playSong.src=""
    console.log(this.playSong.src)
    this.pause()
    let indexOfCurrentSong=0;
    this.audioData.forEach((audio)=>{
      if(audio.audio===currentSong.audio){
      indexOfCurrentSong= this.audioData.indexOf(audio);
      }
    })
   if( indexOfCurrentSong==0){
     this.disableButton_next=false;
    this.disableButton_previous=true;
   }else{
      this.disableButton_next=false;
      // this.playButtonState=!this.playButtonState;
     this.currentSongPlaying=this.audioData[indexOfCurrentSong-1];
     this.playSong.src = this.audioData[indexOfCurrentSong-1].audio; 
     if(this.playSong.currentTime<this.playSong.duration){
      console.log("newsong")
     this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
     this.playSong.pause();
     this.playSong.src = this.audioData[indexOfCurrentSong-1].audio;
     this.playSong.load();
     return this.playSong.play(); 
    }
   }
  }
  playAllLoop(index : number){
    this.playSong.pause();
    this.playSong.src = this.audioData[index+1].audio;
    // this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
    this.playSong.load();
    this.playSong.play();
  }
  playSingle(index : number,place){
    this.playSong.pause();
    this.playSong.src = this.audioData[index].audio;
    this.playSong.load();
    this.playSong.play();
    if(place.pos==="list"){
      this.playButtonState=false;
      this.rotateButton=true;
      this.currentSongPlaying=this.audioData[index]
    }
  }
  shuffle(index : number){
    // var randomIndex = Math.floor(Math.random() *2.5+ index);
    // console.log(this.randomIndex)
    this.playSong.pause();
    this.playSong.src = this.audioData[index].audio;
    this.playSong.load();
    this.playSong.play();
  }
  playNext(currentSong){
    // this.playSong.currentTime=0
    let indexOfCurrentSong=0;
    this.audioData.forEach((audio)=>{
      if(audio.audio===currentSong.audio){
      indexOfCurrentSong= this.audioData.indexOf(audio);
      };
    })
    console.log(indexOfCurrentSong,this.audioData.length);
    // this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
    
    if(indexOfCurrentSong===(this.audioData.length-1)){
      this.disableButton_previous=false;
      this.disableButton_next=true;
      if(this.boldIcon==true &&this.loopIconIndex==2){
        this.currentSongPlaying=this.audioData[indexOfCurrentSong];
        return this.playSingle(indexOfCurrentSong,{pos:"notList"})
      }
      return this.pause();
    }else{
      this.disableButton_previous=false;
       if(this.boldIcon==true &&this.loopIconIndex==1){
        this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
        return this.playAllLoop(indexOfCurrentSong)
       }
       if(this.boldIcon==true &&this.loopIconIndex==2){
        this.currentSongPlaying=this.audioData[indexOfCurrentSong];
        return this.playSingle(indexOfCurrentSong,{pos:"notList"})
       }
       if(this.boldIcon==true &&this.loopIconIndex==3){
         console.log("shuffle")
        let indexx= Math.floor((Math.random() *Math.PI)/2+ indexOfCurrentSong); //random equation
        console.log(indexx)
        this.currentSongPlaying=this.audioData[indexx];
        return this.shuffle(indexx)
       }
       if(this.playSong.currentTime<this.playSong.duration){
         console.log("newsong")
        this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
        this.playSong.pause();
        this.playSong.src = this.audioData[indexOfCurrentSong+1].audio;
        this.playSong.load();
        return this.playSong.play(); 
       }
      //  this.playSong.pause();
       this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
      //  this.playSong.src = this.audioData[indexOfCurrentSong+1].audio;
      //  this.playSong.load();
      //  this.playSong.play();
       return this.pause() 
    }
  }
  showlist(){
    this.visible=!this.visible
    console.log(this.table)
  }
  favorited(song){
    console.log(song,this.favoritedSongsList)
    this.audioData.forEach((audio)=>{
        if(audio.audio==song.audio){
          if(this.favoritedSongsList.includes(audio.audio)){
            this.favoritedSong=false
            let indexOfSong=this.favoritedSongsList.indexOf(audio.audio)
            this.favoritedSongsList.splice(indexOfSong,1)
            return
          }
          this.favoritedSongsList.push(song.audio)
          console.log(this.favoritedSongsList)
          this.favoritedSong=true
        }
    })
  }
}
