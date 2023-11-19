// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import SubscriptionForm from './components/SubscriptionForm';
import SubscriptionSettings from './components/SubscriptionSettings';
import {Account, constants, Contract, Provider} from 'starknet';

function App() {
    interface SubscriptionSettingsData {
        paymentAmount: number;
        paymentToken: string;
        subPeriodInSeconds: number;
        subId: number;
        maxPeriodsAllowed: number;
    }

    const [logsLeft, setLogsLeft] = useState<string[]>([]);
    const [logsRight, setLogsRight] = useState<string[]>([]);

    const handleSubscribe = async (publicKey: string, privateKey0: string) => {
        const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });

        const privateKey = "0x6676d90fa0ecb651e3c60113a4de1065efc2791dbacf001d2b5479a3b6dc9b1";
        const accountAddress = "0x5c579796551542374ba563147523cc0962d48698fba5b53238f249ff325be0c";
        const account0 = new Account(provider, accountAddress, privateKey);

        const testAddress = "0x5c579796551542374ba563147523cc0962d48698fba5b53238f249ff325be0c";
        const sub_s_address = 0xd9bffb131977b895549f3016ff683fe86fdefa36119a4307ef399af5312dfb
        const ETH = 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7
        const ethAddress = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";




        // const bal10 = await ethContract.balanceOf([0x5c579796551542374ba563147523cc0962d48698fba5b53238f249ff325be0c]);
        // const initialBalanceLog0 = `balance = ${bal10.res.toString()}`;
        // setLogsLeft([...logsLeft, initialBalanceLog0])


        // const { abi: testAbi } = await provider.getClassAt(testAddress);
        // if (testAbi === undefined) { throw new Error("no abi.") };
        // const myTestContract = new Contract(testAbi, testAddress, provider);
        //
        // myTestContract.connect(account0);
        //
        // const myCall = myTestContract.populate("add_subscription", [sub_s_address,
        // 1, 0,
        //     ETH,
        //     0x03e8, 0x0,
        //     0x0, 0x0,
        //     0x5, 0x0,
        // ]);
        // const res = await myTestContract.add_subscription(myCall.calldata);
        // await provider.waitForTransaction(res.transaction_hash);


        const { abi: testAbi0 } = await provider.getClassAt(ethAddress);
        if (testAbi0 === undefined) { throw new Error("no abi.") };
        const ethContract = new Contract(testAbi0, ethAddress, provider);
        const bal1 = await ethContract.symbol();
        const initialBalanceLog = `balance = ${bal1.res.toString()}`;
        setLogsLeft([...logsLeft, initialBalanceLog]);
    };

    const handleTriggerPayment = async (publicKey: string, privateKey0: string, side: 'left' | 'right') => {
        const provider = new Provider({sequencer: {network: constants.NetworkName.SN_GOERLI}}) // for testnet
        // const privateKey = "0x6676d90fa0ecb651e3c60113a4de1065efc2791dbacf001d2b5479a3b6dc9b1";
        // const accountAddress = "0x5c579796551542374ba563147523cc0962d48698fba5b53238f249ff325be0c";
        // const account = new Account(provider, accountAddress, privateKey);
        const testAddress = "0x5a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426";

        // read abi of Test contract
        const {abi: testAbi} = await provider.getClassAt(testAddress);
        if (testAbi === undefined) { throw new Error("no abi.") };
        const myTestContract = new Contract(testAbi, testAddress, provider);
        const bal1 = await myTestContract.name();
        const initialBalanceLog = `Initial balance = ${bal1.res.toString()}`;
        setLogsRight([...logsRight, initialBalanceLog]);
    };

    const handleSettingsSubmit = (settings: SubscriptionSettingsData, side: 'left' | 'right') => {
        const logMessage = `Subscription Settings: ${JSON.stringify(settings)}`;
        side === 'left' ? setLogsLeft([...logsLeft, logMessage]) : setLogsRight([...logsRight, logMessage]);
    };

    return (
        <div className="App">
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h2>Left Side</h2>
                    <SubscriptionForm onSubmit={(publicKey, privateKey) => handleSubscribe(publicKey, privateKey)} buttonText="Subscribe" />
                </div>
                <div>
                    <h2>Right Side</h2>
                    <SubscriptionForm onSubmit={(publicKey, privateKey) => handleTriggerPayment(publicKey, privateKey, 'right')} buttonText="Trigger Pay" />
                </div>
            </div>

            <div className="settings-container">
                <h2>Common Settings</h2>
                <SubscriptionSettings onSubmit={(settings) => handleSettingsSubmit(settings, 'left')} />
            </div>

            <div className="logs-container">
                <div className="logs">
                    <h2>Left Logs</h2>
                    {logsLeft.map((log, index) => (
                        <p key={index}>{log}</p>
                    ))}
                </div>
                <div className="logs">
                    <h2>Right Logs</h2>
                    {logsRight.map((log, index) => (
                        <p key={index}>{log}</p>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default App;
