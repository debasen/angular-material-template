import { ThisReceiver } from '@angular/compiler';
import { ApplicationRef, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioPlayerComponent implements OnInit {
  @ViewChild('audioPlayer', {static: true}) playSongRef : ElementRef<HTMLAudioElement>;
  @ViewChild('playPauseButton', {static: true})buttonRef:ElementRef<HTMLSpanElement>;
  rotateButton=false;
  playButtonState=true;
  ShowvolumControl=false;
  hideVolIcon=false;
  loopIconIndex=0;
  loopIcons = {0 : 'repeat', 1: 'repeat_one', 2 : 'shuffle'};
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
  constructor() { }
 
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
    this.loopIconIndex = this.loopIconIndex == 2 ? 0 : this.loopIconIndex+1;
  }
 play(){
   this.playButtonState=!this.playButtonState;
    // console.log(this.playButtonState)
    if(this.playButtonState==false || this.playSong.paused)
    {this.playSong.play();
    this.rotateButton=true;
  } else{
      this.rotateButton=false;
      // this.songPlaying=false;
      this.playSong.pause()
    }
  
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
  currentTime(value){
    return this.playSong ? this.playSong.duration*value/100 : 0;
  }
  // formatLabel(value) {
  //   // console.log(this.currentTimePlayedSong)
  //   if(value>0)return  this.currentTimePlayedSong
  // }
  console(){
    console.log("check")
  }
  playPrevious(currentSong){
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
     this.play()
   }
  }
  playNext(currentSong){
    let indexOfCurrentSong=0;
    this.audioData.forEach((audio)=>{
      if(audio.audio===currentSong.audio){
      indexOfCurrentSong= this.audioData.indexOf(audio);
      };
    })
    console.log(indexOfCurrentSong,this.audioData.length);
    if(indexOfCurrentSong===(this.audioData.length-1)){
      this.disableButton_previous=false;
      this.disableButton_next=true;
    }else{
      this.disableButton_previous=false;
      this.currentSongPlaying=this.audioData[indexOfCurrentSong+1];
      // this.playSong.play()
    }
  }
  
}
