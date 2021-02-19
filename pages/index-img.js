import React, { memo } from "react";
import { listPicAtom, listPicItem } from '../atoms/atoms'
import { useRecoilState, useRecoilValue } from "recoil";
import { Image } from 'semantic-ui-react'
import { GdbMessage } from './GdbMessage'


const ListItem = ({ index }) => { 
  const [listItemValue, setListItemValue] = useRecoilState(listPicItem(index));

  const handleClick = e => {
    let {
      target: { checked }
    } = e;
    setListItemValue(checked);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={listItemValue.selected}
        onChange={handleClick}
      />
      <Image className="ui small image"  src={listItemValue.url} />
    </>
  );
};

const SelectedItem = memo(({ index }) => { 
    const [SelectedItemValue] = useRecoilState(listPicItem(index));
    console.log("render",SelectedItemValue)
    return (
      <>
        <Image class="ui small image"  src={SelectedItemValue.url} />
      </>
    );
  });
  

const App = () => {
  const listPicAtomValue = useRecoilValue(listPicAtom);
  return (
    <div className="ui top attached button">
        <div className="ui placeholder segment">

            <h3>Check Box list</h3>
            <div className="ui grid">  
            {listPicAtomValue.map((_, index) => {

                return <ListItem key={index} index={index} />; 
            })}
        </div>
        <div className="ui placeholder segment">

            <h3>Selected Box list</h3>  
            <div class="ui small image">   

            {listPicAtomValue.map((item, index) => {
                return item.selected ? (

                <SelectedItem key={index} index={index} />      
                ) : (
                <></>
                );
            })}
            
            <GdbMessage />
            </div>
        </div>
        </div>
    </div>
  );
};

export default App;
