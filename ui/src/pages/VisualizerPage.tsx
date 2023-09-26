import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ContainerInfo, NetworkInfo } from '../interfaces/interfaces';
import SankeyPage from './SankeyPage';
import ArcPage from './ArcPage';
import ForcePage from './ForcePage';
import TreePage from './TreePage';


const VisualizerPage = (props: {
  networks: NetworkInfo[] | [];
  containers: ContainerInfo[] | [];
}) => {
  const nav = useNavigate();
  const location = useLocation();

  const [activeDiagram, setActiveDiagram] = useState<'sankey' | 'arc' | 'force' | 'tree'>('sankey');

  useEffect(() => {
    // Update activeDiagram based on the route
    if (location.pathname.endsWith('Sankey')) {
      setActiveDiagram('sankey');
    } else if (location.pathname.endsWith('Arc')) {
      setActiveDiagram('arc');
    } else if (location.pathname.endsWith('Force')) {
      setActiveDiagram('force');
    } else if (location.pathname.endsWith('Tree')) {
      setActiveDiagram('tree');
    }
  }, [location.pathname]);

  return (
    <div className='mainContainer'>
      <div className='buttonContainer'>
        <button className='button' onClick={() => nav('/')}>
          Networks
        </button>
        <button className='button san' onClick={() => nav('./Sankey')}>
          Sankey
        </button>
        <button className='button arc' onClick={() => nav('./Arc')}>
          Arc
        </button>
        <button className='button force' onClick={() => nav('./Force')}>
          Force
        </button>
        <button className='button tree' onClick={() => nav('./Tree')}>
          Tree
        </button>
      </div>
      {activeDiagram === 'sankey' && (
        <SankeyPage networks={props.networks} containers={props.containers} />
      )}
      {activeDiagram === 'arc' && (
        <ArcPage networks={props.networks} containers={props.containers} />
      )}
      {activeDiagram === 'force' && (
        <ForcePage networks={props.networks} containers={props.containers} />
      )}
      {activeDiagram === 'tree' && (
        <TreePage networks={props.networks} containers={props.containers} />
      )}
    </div>
  );
};

export default VisualizerPage;