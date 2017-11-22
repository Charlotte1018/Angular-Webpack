import { Injectable } from "@angular/core";
import { stringify } from "querystring";
let Web3 = require('web3');
@Injectable()
export class Web3Service {
    public web3;
    public ManagementAbi;


    connect(nodeAddress): any {
        this.web3 = new Web3(new Web3.providers.HttpProvider(nodeAddress));
        console.log('连接...', nodeAddress);
    }
    getWeb3(): any {
        return this.web3;
    }
    getManagementAbi(): any {
        fetch('../../../build/contracts/Management.json').then((res) => {
            return res.json();
        }).then((res) => {
            this.ManagementAbi = JSON.stringify(res.abi);
            console.log(this.ManagementAbi);
        })
    }

}