import { atom, selectorFamily } from 'recoil';


export const listPicAtom = atom({
    key: "listPicAtom",
    default: [
  
      {
        name:'pic0',
        url: 'https://elenacube.s3-eu-west-1.amazonaws.com/media/ywmqs36nsjg21-min.jpg',
        selected: false
      },
      {
        name:'pic1',
        url: 'https://elenacube.s3-eu-west-1.amazonaws.com/media/xbkxqgaiyus41.jpg',
        selected: false
      },
      {
        name:'pic2',
        url: 'https://elenacube.s3-eu-west-1.amazonaws.com/media/o0038plfs2n31.jpg',
        selected: false
      },
      {
        name:'pic3',
        url: 'https://elenacube.s3-eu-west-1.amazonaws.com/media/nvfde0q2jrl11.jpg',
        selected: false
      },
    ]
  });
  
  export const listPicItem = selectorFamily({
    key: "listPicItem",
    get: index => ({ get }) => {
      return get(listPicAtom)[index];
    },
    set: index => ({ get, set }, newValue) => {
      const listValue = get(listPicAtom);
      set(
        listPicAtom,
        listValue.map((item, i) =>
          i === index ? { ...item, selected: newValue } : item
        )
      );
    }
  });


  // A selector represents a piece of derived state
  // selectorFamily, like selectors, accept arguments to the get and set callbacks




/**
|--------------------------------------------------
| get - A function that evaluates the value for the derived state. 
get - a function used to retrieve values from other atoms/selectors.
|--------------------------------------------------
*/







  /**
   * The atomFamily essentially provides a map from the parameter to an atom.
   *  it will generate a unique key for each underlying atom.
   * 
    const elementPositionStateFamily = atomFamily({
    key: 'ElementPosition',
    default: [0, 0],
    });

    function ElementListItem({elementID}) {
    const position = useRecoilValue(elementPositionStateFamily(elementID));
    return (
        <div>
        Element: {elementID}
        Position: {position}
        </div>
    );
    }
   */