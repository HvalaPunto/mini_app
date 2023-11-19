// src/components/SubscriptionForm.tsx
import React, { useState } from 'react';

interface SubscriptionFormProps {
    onSubmit: (publicKey: string, privateKey: string) => void;
    buttonText: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ onSubmit, buttonText }) => {
    const [publicKey, setPublicKey] = useState<string>('');
    const [privateKey, setPrivateKey] = useState<string>('');

    const handleSubmit = () => {
        onSubmit(publicKey, privateKey);
    };

    return (
        <div className="side-container">
            <h2>{buttonText}</h2>
            <div className="form-group">
                <label>Public Key:</label>
                <input type="text" className="form-control" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Private Key:</label>
                <input
                    type="text"
                    className="form-control"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                />
            </div>

            {buttonText === 'Subscribe' && (
                <button className="btn btn-primary" onClick={handleSubmit}>
                    {buttonText}
                </button>
            )}

            {buttonText === 'Trigger Pay' && (
                <button className="btn btn-warning" onClick={handleSubmit}>
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default SubscriptionForm;
