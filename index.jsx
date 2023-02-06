import React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3";
import React scripts from "react-scripts";

function StakingDapp() {
  const [accounts, setAccounts] = React.useState([]);
  const [balance, setBalance] = React.useState(0);
  const [totalSupply, setTotalSupply] = React.useState(0);
  const [totalDividends, setTotalDividends] = React.useState(0);
  const [totalBurned, setTotalBurned] = React.useState(0);
  const [approveAmount, setApproveAmount] = React.useState(0);
  const [approveChecked, setApproveChecked] = React.useState(false);
  const [stakeAmount, setStakeAmount] = React.useState(0);
  const [stakeChecked, setStakeChecked] = React.useState(false);
  const [claimAmount, setClaimAmount] = React.useState(0);
  const [claimChecked, setClaimChecked] = React.useState(false);
  const [unstakeAmount, setUnstakeAmount] = React.useState(0);
  const [unstakeChecked, setUnstakeChecked] = React.useState(false);

  const connectAccount = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    setAccounts(accounts);
    const balance = await web3.eth.getBalance(accounts[0]);
    setBalance(balance);
    const totalSupply = await web3.eth.getTotalSupply();
    setTotalSupply(totalSupply);
    const totalDividends = await web3.eth.getTotalDividends();
    setTotalDividends(totalDividends);
    const totalBurned = await web3.eth.getTotalBurned();
    setTotalBurned(totalBurned);
  };

  const approve = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    web3.eth.approve(accounts[0], approveAmount);
  };

  const stake = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    web3.eth.stake(accounts[0], stakeAmount);
  };

  const claim = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    web3.eth.claim(accounts[0], claimAmount);
  };

  const unstake = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    web3.eth.unstake(accounts[0], unstakeAmount);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="logo-container">
        <img
          src="https://i.gyazo.com/0f64d58cc3f6e35936ac48f79ffa02bd.png"
          alt="logo"
          className="logo"
        />
      </div>

      <div>
        <button className="connect-button" onClick={connectAccount}>
          Connect to MetaMask
        </button>
      </div>

      <h2>Community Tax Driven</h2>
      <div>
        <strong>Total Tokens Burned:</strong> {totalBurned}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em 0"
        }}
      >
        <label>
          Approve Amount:{" "}
          <input
            type="number"
            value={approveAmount}
            onChange={(e) => setApproveAmount(e.target.value)}
          />
        </label>
        <label>
          Verify to interact:{" "}
          <input
            type="checkbox"
            checked={approveChecked}
            onChange={(e) => setApproveChecked(e.target.checked)}
          />
        </label>
        <button
          className="approve-button"
          disabled={!approveChecked}
          onClick={approve}
        >
          Approve Contract
        </button>
      </div>
      <div>
        <strong>User Token Balance:</strong> {balance}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em 0"
        }}
      >
        <label>
          Stake:{" "}
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
          />
        </label>
        <label>
          Verify to interact:{" "}
          <input
            type="checkbox"
            checked={stakeChecked}
            onChange={(e) => setStakeChecked(e.target.checked)}
          />
        </label>
        <button disabled={!stakeChecked} className="stake-button" onClick={stake}>
          Stake *min. 100
        </button>
      </div>
      <div>
        <strong>Total Dividends Earned:</strong> {totalDividends}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em 0"
        }}
      >
        <label>
          Claim Dividends:{" "}
          <input
            type="number"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
          />
        </label>
        <label>
          Verify to interact:{" "}
          <input
            type="checkbox"
            checked={claimChecked}
            onChange={(e) => setClaimChecked(e.target.checked)}
          />
        </label>
        <button disabled={!claimChecked} className="claim-button" onClick={claim}>
          Claim
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em 0"
        }}
      >
        <label>
          Emergency Unstake:{" "}
          <input
            type="number"
            value={unstakeAmount}
            onChange={(e) => setUnstakeAmount(e.target.value)}
          />
        </label>
        <label>
          Verify to interact:{" "}
          <input
            type="checkbox"
            checked={unstakeChecked}
            onChange={(e) => setUnstakeChecked(e.target.checked)}
          />
        </label>
        <button
          disabled={!unstakeChecked}
          className="unstake-button"
          onClick={unstake}
        >
          Unstake
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em 0"
        }}
      >
        <div>
          <strong>Total Token Supply:</strong> {totalSupply}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<StakingDapp />, document.getElementById("root"));
