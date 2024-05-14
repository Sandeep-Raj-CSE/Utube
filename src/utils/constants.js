// JavaScript module exporting two objects: logo and categories. 

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';

// youtube logo

export const logo = 'https://icons.iconarchive.com/icons/graphics-vibe/media-pin-social/256/youtube-icon.png';

/* 
 exports a constant named categories which is an array of objects. Each object represents a category 
 and contains two properties: name and icon. The name property is a string representing the name of the category, 
 and the icon property is a React component representing the icon associated with that category

*/
export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'Fav Music', icon: <LibraryMusicRoundedIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'Javascript', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, }
];

export const demoThumbnailUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpimylifeup.com%2Fcategory%2Fcoding%2F&psig=AOvVaw3T_1N-oE15U1CmWWjWJaY8&ust=1714889291521000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOiflsyq84UDFQAAAAAdAAAAABAE';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'Sandeep Coding';
export const demoVideoTitle = 'Build and Deploy Youtube Clone';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'