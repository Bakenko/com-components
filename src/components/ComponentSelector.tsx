import { FC } from 'react';

const possibleComponent = ['Component 1', 'Component 2', 'Component 3', 'Component 4', 'Component 5', 'Component 6'];

interface Props{
    selectedComponent: string;
    onComponentChange: ( component: string ) => void;
}

export const ComponentSelector:FC<Props> = ({ selectedComponent, onComponentChange }) => {
  return (
    <div style={{ display: 'flex'}}>
        {
            possibleComponent.map( component => (
                <button 
                    key={ component }
                    className={ selectedComponent === component ? 'active': ''}
                    onClick={ () => onComponentChange( component ) }
                >
                    { component }
                </button>
            ))
        }        
    </div>
  )
}
