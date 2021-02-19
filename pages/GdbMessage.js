import React from 'react'
import { Message } from 'semantic-ui-react'
import { useRecoilState, useRecoilValue } from "recoil";
import { listPicAtom, listPicItem } from '../atoms/atoms'

const NameItem = ({ index }) => { //
  const [NameItemValue] = useRecoilState(listPicItem(index));
  return (

    <Message warning> 
          {NameItemValue.name}  
    </Message>    
  );
};

export const GdbMessage = () => {
  const listPicAtomValue = useRecoilValue(listPicAtom);
  return (
    <>
    {listPicAtomValue.map((_, index) => {
          return <NameItem key={index} index={index} />; 
      })}
                
    </>
  );
};



