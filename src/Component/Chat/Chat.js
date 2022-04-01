import React from 'react'

const Chat = ({ route, navigation }) => {
  const { name, display, image } = route.params;
  console.log(name+display+image);
  return (
    <div>name , display, image</div>
  )
}

export default Chat