import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { repos as repoAtom, view as viewAtom } from '../atoms/atoms'
import Menu from './Menu.js'
import { Checkbox } from 'semantic-ui-react'

function App() {
    const [repos, setRepos] = useRecoilState(repoAtom);
    const view = useRecoilValue(viewAtom)
    useEffect(() => {
        const getRepos = async () => {
            const url = `https://github-trending-api.waningflow.com/repositories?language=typescript&since=${view}`;
            const resp = await fetch(url);
            const body = await resp.json();
            //setRepos(body);
            setRepos(
                Object.assign({}, repos, {
                    [view]:body,
                })
            );
            console.log(view);
        };
// Object.assign set the state to a new object, including
// the previous state but overwriting at [key] with the new
// JSON response
        getRepos();
    }, [view]);



    return ( 
    <>
    <Menu />
    <Checkbox />
    {repos[view].map((repo) => (
    <div key={repo.body}>
    {repo.author}-{repo.url}-d
    </div>
    ))}
    </>
    );
}


 
  
export default App;

 