import React from 'react';
import Label from '../../Components/Label';
import './index.css';

const LabelUsage: React.FC = () => {
    return (
        <div className="label-page">
            <h1>Label Variations</h1>
            <div className="label-variations">
                <Label htmlFor="input1" className="label-primary" id="label1">
                    Primary Label
                </Label>
                <Label htmlFor="input2" className="label-secondary" id="label2">
                    Secondary Label
                </Label>
                <Label htmlFor="input3" className="label-success" id="label3">
                    Success Label
                </Label>
                <Label htmlFor="input4" className="label-danger" id="label4">
                    Danger Label
                </Label>
                <Label htmlFor="input5" className="label-warning" id="label5">
                    Warning Label
                </Label>
                <Label htmlFor="input6" className="label-info" id="label6">
                    Info Label
                </Label>
                <Label htmlFor="input7" className="label-light" id="label7">
                    Light Label
                </Label>
                <Label htmlFor="input8" className="label-dark" id="label8">
                    Dark Label
                </Label>
            </div>
        </div>
    );
};

export default LabelUsage;