// src/components/SubscriptionSettings.tsx
import React, { useState } from 'react';

interface SubscriptionSettingsProps {
    onSubmit: (settings: SubscriptionSettingsData) => void;
}

interface SubscriptionSettingsData {
    paymentAmount: number;
    paymentToken: string;
    subPeriodInSeconds: number;
    subId: number;
    maxPeriodsAllowed: number;
}

const SubscriptionSettings: React.FC<SubscriptionSettingsProps> = ({ onSubmit }) => {
    const [settings, setSettings] = useState<SubscriptionSettingsData>({
        paymentAmount: 0,
        paymentToken: '',
        subPeriodInSeconds: 0,
        subId: 0,
        maxPeriodsAllowed: 0,
    });

    const handleSubmit = () => {
        onSubmit(settings);
    };

    return (
        <div className="settings-container">
            <h2>Subscription Settings</h2>

            <div className="form-group subscription-settings">
                <label>Payment Amount:</label>
                <input
                    type="number"
                    className="form-control"
                    value={settings.paymentAmount}
                    onChange={(e) => setSettings({ ...settings, paymentAmount: +e.target.value })}
                />
            </div>

            <div className="form-group subscription-settings">
                <label>Payment Token:</label>
                <input
                    type="text"
                    className="form-control"
                    value={settings.paymentToken}
                    onChange={(e) => setSettings({ ...settings, paymentToken: e.target.value })}
                />
            </div>

            <div className="form-group subscription-settings">
                <label>Subscription Period (seconds):</label>
                <input
                    type="number"
                    className="form-control"
                    value={settings.subPeriodInSeconds}
                    onChange={(e) => setSettings({ ...settings, subPeriodInSeconds: +e.target.value })}
                />
            </div>

            <div className="form-group subscription-settings">
                <label>Subscription ID:</label>
                <input
                    type="number"
                    className="form-control"
                    value={settings.subId}
                    onChange={(e) => setSettings({ ...settings, subId: +e.target.value })}
                />
            </div>

            <div className="form-group subscription-settings">
                <label>Max Periods Allowed:</label>
                <input
                    type="number"
                    className="form-control"
                    value={settings.maxPeriodsAllowed}
                    onChange={(e) => setSettings({ ...settings, maxPeriodsAllowed: +e.target.value })}
                />
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>
                Submit Settings
            </button>
        </div>
    );
};

export default SubscriptionSettings;
