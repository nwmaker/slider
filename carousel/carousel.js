import React from 'react'

const pics = [
  'https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg',
  'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg',
]

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      next: this.getNextIndex(0),
      move: false
    }
  }
  
  getNextIndex(current) {
    if (current >= (pics.length - 1)) {
      return 0
    }
    return current + 1
  }

  setIndex(current) {
    this.setState({
      index: current,
      next: this.getNextIndex(current)
    })
  }

  componentDidMount() {
    
    this.timerID = setInterval(() => {
      // on
      this.setState({
        move: true
      });
      // off
      setTimeout(() => {
        this.setState({
          move: false
        });
        this.setIndex(this.getNextIndex(this.state.index));
      }, 500); // same delay as in the css transition here
     
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render() {
    const move = this.state.move ? 'move' : '';
    if (this.state.move) {
      
    }
    return (
      <div className="mask">
        <div className="pic-wrapper">
          <div className={`current pic ${move}`}>
            {this.state.index}
            <img src={pics[this.state.index]} alt="" />
          </div>
          <div className={`next pic ${move}`}>
            {this.state.next}
            <img src={pics[this.state.next]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;

