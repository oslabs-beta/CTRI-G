// import React from 'react';
import { useNavigate } from 'react-router-dom';
// import ContainerDisplay from '../components/ContainerDisplay';
import Network from '../components/Network';
import { ContainerInfo, NetworkInfo } from '../interfaces/interfaces';
// import { StoreContext } from '../dataStore';

const NetworksPage = (props: {
  networks: NetworkInfo[] | [];
  containers: ContainerInfo[] | [];
}) => {
  const nav = useNavigate();
  const networkEl: JSX.Element[] = [];
  props.networks.forEach((network, i: number) => {
    const networkIndex: String = `network${i}`;
    networkEl.push(
      <Network
        key={`network${i}`}
        networkIndex={networkIndex}
        network={network}
        containers={props.containers}
      />
    );
  });
  return (
    <div className="mainContainer">
      <div className="buttonContainer">
        <button
          className="button"
          onClick={() => nav('containers')}
        >
          Containers
        </button>
      </div>
      <div className="hostContainer">
        <h1>Host</h1>
      </div>
      <div className="networksContainer">{networkEl}</div>
    </div>
  );
};

export default NetworksPage;

// const nav = useNavigate();
// const { host, setHost, bridges, setBridges, containers, setContainers } =
//   useContext(StoreContext);
