import React , {useEffect, useState,useRef} from 'react';
import { View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
     Dimensions,Image, 
     FlatList,
     Animated} from 'react-native';

import TrackPlayer, {
  Capability, 
  Event, 
  RepeatMode, 
  State, 
  usePlaybackState, 
  useProgress,
  useTrackPlayerEvents
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import songs from '../model/Data';

//getting the dimenssion of device
const {width, height} = Dimensions.get('window');


//setting up track player
const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};


//in order to paly and pause you need to get current track 
const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log(currentTrack, playBackState, State.Playing);
  if (currentTrack != null) {
    if (playBackState == State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  }
};



const MusicPlayer = () => {
 
  const playBackState = usePlaybackState();
  const progress = useProgress();
  //   custom states
  const [songIndex, setsongIndex] = useState(0);
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackArtwork, setTrackArtwork] = useState();
  // custom referecnces
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null);

    //   changing the track on complete
    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
      if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const {title, artwork, artist} = track;
        setTrackTitle(title);
        setTrackArtist(artist);
        setTrackArtwork(artwork);
      }
    });

    const repeatIcon = () => {
      if (repeatMode == 'off') {
        return 'repeat-off';
      }
  
      if (repeatMode == 'track') {
        return 'repeat-once';
      }
  
      if (repeatMode == 'repeat') {
        return 'repeat';
      }
    };
  
    const changeRepeatMode = () => {
      if (repeatMode == 'off') {
        TrackPlayer.setRepeatMode(RepeatMode.Track);
        setRepeatMode('track');
      }
  
      if (repeatMode == 'track') {
        TrackPlayer.setRepeatMode(RepeatMode.Queue);
        setRepeatMode('repeat');
      }
  
      if (repeatMode == 'repeat') {
        TrackPlayer.setRepeatMode(RepeatMode.Off);
        setRepeatMode('off');
      }
    };
  
    const skipTo = async trackId => {
      await TrackPlayer.skip(trackId);
    };

     useEffect(() => {
      setupPlayer();

      scrollX.addListener(({value}) => {
        //   console.log(`ScrollX : ${value} | Device Width : ${width} `);

        const index = Math.round(value / width);
        skipTo(index);
        setsongIndex(index);

      //   console.log(`Index : ${index}`);
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
    };
  }, []);

    const skipToNext = () => {
        songSlider.current.scrollToOffset({
            offset : (songIndex +1) * width,
        });
    }

    const skipToPrevious = () => {
        songSlider.current.scrollToOffset({
            offset : (songIndex - 1) * width,
        });
    }

    const renderSongs = ({item, index}) => {
        return (
          <Animated.View style = {styles.mainImageWrapper}>
            <View style={styles.artWorkWrapper}>
              <Image
                source={item.artwork} style={styles.artWorkImg}
              />
            </View> 
          </Animated.View>        
        );
      };

  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.mainContainer} >            
          <Animated.FlatList
            ref={songSlider}
            renderItem={renderSongs}
            data={songs}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />

            {/*Song Content*/}
            <View>
                <Text style={[styles.songTitle,styles.songContent]}>{songs[songIndex].title}</Text>
                <Text style={[styles.songArtist,styles.songContent]}>{songs[songIndex].artist}</Text>
            </View>

            {/*slider*/}
            <View>
                <Slider
                     style={styles.progressBar}
                     value={progress.position}
                     minimumValue={0}
                     maximumValue={progress.duration}
                     thumbTintColor="#FFD369"
                     minimumTrackTintColor="#FFD369"
                     maximumTrackTintColor="#fff"
                     onSlidingComplete={async value => {
                       await TrackPlayer.seekTo(value);
                     }}
                /> 

                {/*music progress Duration*/} 
                <View style ={styles.progressLevelDuration}>
                    <Text style ={styles.progressLabelText}>
                      {new Date(progress.position * 1000)
                      .toLocaleTimeString()
                      .substring(3)}
                    </Text>
                    <Text style ={styles.progressLabelText}>
                      {new Date((progress.duration - progress.position) * 1000)
                      .toLocaleTimeString()
                      .substring(3)}
                    </Text>
                </View>
            </View>  

            {/*music control*/}
            <View  style ={styles.musicControlsContainer}>
                <TouchableOpacity onPress ={skipToPrevious}>
                    <Ionicons name = 'play-skip-back-outline' size={35} color="#FFD369"/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => togglePlayBack(playBackState)}>
                <Ionicons
                  name={
                    playBackState === State.Playing
                      ? 'ios-pause-circle'
                      : 'ios-play-circle'
                  }
                  size={75}
                  color="#FFD369"
                />
                </TouchableOpacity>
            
                <TouchableOpacity onPress ={skipToNext}>
                    <Ionicons name = 'play-skip-forward-outline' size={35} color="#FFD369"/>
                </TouchableOpacity>
            </View>
        </View>        

        <View style ={styles.bottomContainer} >
            <View style ={styles.bottomIconWrapper}>
                <TouchableOpacity onPress ={()=>{}}>
                    <Ionicons name = 'heart-outline' size={30} color="#888888"/>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=>{}}>
                    <Ionicons name = 'repeat' size={30} color="#888888"/>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=>{}}>
                    <Ionicons name = 'share-outline' size={30} color="#888888"/>
                </TouchableOpacity>

                <TouchableOpacity onPress ={()=>{}}>
                    <Ionicons name = 'ellipsis-horizontal' size={30} color="#888888"/>
                </TouchableOpacity>            
            </View>            
        </View>
    </SafeAreaView>
  
  )
}

export default MusicPlayer;

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: '#222831',
    },
    
    mainContainer:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',      
    },

    bottomContainer:{
      width: width,
      alignItems: 'center',
      paddingVertical:15,
      borderTopColor:'#393E46',
      borderWidth:1,
    },

    bottomIconWrapper:{
      flexDirection:'row',
      justifyContent: 'space-between',
      width:'80%',
    },

    mainImageWrapper:{
      width: width,
      justifyContent:'center',
      alignItems:'center',
      
    },

    artWorkWrapper:{
        width: 300,
        height: 400,
        marginBottom:25, 
    },

    artWorkImg:{
        width: '100%',
        height: '100%',
        borderRadius:15,       
    },

    songContent:{
      textAlign:'center',
      color: '#EEEEEE',
    },

    songTitle:{
      fontSize: 18,
      fontWeight: '600',
    },

    songArtist:{
      fontSize: 16,
      fontWeight: '300',
    },

    progressBar:{
      width: 350,
      height :40,
      marginTop: 20,
      flexDirection: 'row',
    },

    progressLevelDuration:{
      width:340,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    progressLabelText:{
      color: '#fff',
      fontWeight: '500',
    },

    musicControlsContainer:{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent:'space-between',
       width:'60%',
       marginTop: 10,
    },

  });

