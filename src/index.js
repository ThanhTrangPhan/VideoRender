// create some component
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import ytSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDP1JoxWTrn0iTs9JfmoP0X6jky8HbozoU';

// ytSearch({ key: API_KEY, term: 'levitating' }, function (data) {
//     console.log(data);
// });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('dua lipa');

    }

    videoSearch(term) {
        ytSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // equal: this.setState({videos:videos})
        });
    }
    render() {
        const videoSearch= _.debounce((term) => {this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTerm={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    //update app state
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} //setState: set selectedVideo to a chosen one
                    videos={this.state.videos} />
            </div>
        );
    }

}
ReactDom.render(<App />, document.querySelector('.container'));
