// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class IssueDepositEvent extends ethereum.Event {
  get params(): IssueDepositEvent__Params {
    return new IssueDepositEvent__Params(this);
  }
}

export class IssueDepositEvent__Params {
  _event: IssueDepositEvent;

  constructor(event: IssueDepositEvent) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get issueId(): string {
    return this._event.parameters[2].value.toString();
  }

  get depositId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RefundIssueDepositEvent extends ethereum.Event {
  get params(): RefundIssueDepositEvent__Params {
    return new RefundIssueDepositEvent__Params(this);
  }
}

export class RefundIssueDepositEvent__Params {
  _event: RefundIssueDepositEvent;

  constructor(event: RefundIssueDepositEvent) {
    this._event = event;
  }

  get depositId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RefundUserDepositEvent extends ethereum.Event {
  get params(): RefundUserDepositEvent__Params {
    return new RefundUserDepositEvent__Params(this);
  }
}

export class RefundUserDepositEvent__Params {
  _event: RefundUserDepositEvent;

  constructor(event: RefundUserDepositEvent) {
    this._event = event;
  }

  get depositId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SetGovTokenForIssueEvent extends ethereum.Event {
  get params(): SetGovTokenForIssueEvent__Params {
    return new SetGovTokenForIssueEvent__Params(this);
  }
}

export class SetGovTokenForIssueEvent__Params {
  _event: SetGovTokenForIssueEvent;

  constructor(event: SetGovTokenForIssueEvent) {
    this._event = event;
  }

  get issueId(): string {
    return this._event.parameters[0].value.toString();
  }

  get govTokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UserDepositEvent extends ethereum.Event {
  get params(): UserDepositEvent__Params {
    return new UserDepositEvent__Params(this);
  }
}

export class UserDepositEvent__Params {
  _event: UserDepositEvent;

  constructor(event: UserDepositEvent) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get githubUserId(): string {
    return this._event.parameters[2].value.toString();
  }

  get depositId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class WithdrawIssueDepositsEvent extends ethereum.Event {
  get params(): WithdrawIssueDepositsEvent__Params {
    return new WithdrawIssueDepositsEvent__Params(this);
  }
}

export class WithdrawIssueDepositsEvent__Params {
  _event: WithdrawIssueDepositsEvent;

  constructor(event: WithdrawIssueDepositsEvent) {
    this._event = event;
  }

  get issueId(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class WithdrawUserDepositEvent extends ethereum.Event {
  get params(): WithdrawUserDepositEvent__Params {
    return new WithdrawUserDepositEvent__Params(this);
  }
}

export class WithdrawUserDepositEvent__Params {
  _event: WithdrawUserDepositEvent;

  constructor(event: WithdrawUserDepositEvent) {
    this._event = event;
  }

  get depositId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DepositStorage__issueDepositsResult {
  value0: Address;
  value1: BigInt;
  value2: string;

  constructor(value0: Address, value1: BigInt, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }
}

export class DepositStorage__userDepositsResult {
  value0: Address;
  value1: BigInt;
  value2: string;

  constructor(value0: Address, value1: BigInt, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }
}

export class DepositStorage extends ethereum.SmartContract {
  static bind(address: Address): DepositStorage {
    return new DepositStorage("DepositStorage", address);
  }

  govTokenByIssueId(param0: string): Address {
    let result = super.call(
      "govTokenByIssueId",
      "govTokenByIssueId(string):(address)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toAddress();
  }

  try_govTokenByIssueId(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "govTokenByIssueId",
      "govTokenByIssueId(string):(address)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  issueDepositIdsByIssueId(param0: string, param1: BigInt): BigInt {
    let result = super.call(
      "issueDepositIdsByIssueId",
      "issueDepositIdsByIssueId(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_issueDepositIdsByIssueId(
    param0: string,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "issueDepositIdsByIssueId",
      "issueDepositIdsByIssueId(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  issueDepositIdsBySender(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "issueDepositIdsBySender",
      "issueDepositIdsBySender(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_issueDepositIdsBySender(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "issueDepositIdsBySender",
      "issueDepositIdsBySender(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  issueDeposits(param0: BigInt): DepositStorage__issueDepositsResult {
    let result = super.call(
      "issueDeposits",
      "issueDeposits(uint256):(address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new DepositStorage__issueDepositsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toString()
    );
  }

  try_issueDeposits(
    param0: BigInt
  ): ethereum.CallResult<DepositStorage__issueDepositsResult> {
    let result = super.tryCall(
      "issueDeposits",
      "issueDeposits(uint256):(address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DepositStorage__issueDepositsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toString()
      )
    );
  }

  issueDepositsAmountByIssueId(param0: string): BigInt {
    let result = super.call(
      "issueDepositsAmountByIssueId",
      "issueDepositsAmountByIssueId(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_issueDepositsAmountByIssueId(
    param0: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "issueDepositsAmountByIssueId",
      "issueDepositsAmountByIssueId(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  issueStatusByIssueId(param0: string): i32 {
    let result = super.call(
      "issueStatusByIssueId",
      "issueStatusByIssueId(string):(uint8)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toI32();
  }

  try_issueStatusByIssueId(param0: string): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "issueStatusByIssueId",
      "issueStatusByIssueId(string):(uint8)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  nextIssueDepositId(): BigInt {
    let result = super.call(
      "nextIssueDepositId",
      "nextIssueDepositId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_nextIssueDepositId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextIssueDepositId",
      "nextIssueDepositId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  octobay(): Address {
    let result = super.call("octobay", "octobay():(address)", []);

    return result[0].toAddress();
  }

  try_octobay(): ethereum.CallResult<Address> {
    let result = super.tryCall("octobay", "octobay():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userClaimAmountByGithbUserId(param0: string): BigInt {
    let result = super.call(
      "userClaimAmountByGithbUserId",
      "userClaimAmountByGithbUserId(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_userClaimAmountByGithbUserId(
    param0: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userClaimAmountByGithbUserId",
      "userClaimAmountByGithbUserId(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userDepositIdsByGithubUserId(param0: string, param1: BigInt): BigInt {
    let result = super.call(
      "userDepositIdsByGithubUserId",
      "userDepositIdsByGithubUserId(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_userDepositIdsByGithubUserId(
    param0: string,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userDepositIdsByGithubUserId",
      "userDepositIdsByGithubUserId(string,uint256):(uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userDepositIdsBySender(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "userDepositIdsBySender",
      "userDepositIdsBySender(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_userDepositIdsBySender(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userDepositIdsBySender",
      "userDepositIdsBySender(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userDeposits(param0: BigInt): DepositStorage__userDepositsResult {
    let result = super.call(
      "userDeposits",
      "userDeposits(uint256):(address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new DepositStorage__userDepositsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toString()
    );
  }

  try_userDeposits(
    param0: BigInt
  ): ethereum.CallResult<DepositStorage__userDepositsResult> {
    let result = super.tryCall(
      "userDeposits",
      "userDeposits(uint256):(address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DepositStorage__userDepositsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toString()
      )
    );
  }

  confirmWithdrawIssueDeposit(
    _payoutAddress: Address,
    _issueId: string
  ): BigInt {
    let result = super.call(
      "confirmWithdrawIssueDeposit",
      "confirmWithdrawIssueDeposit(address,string):(uint256)",
      [
        ethereum.Value.fromAddress(_payoutAddress),
        ethereum.Value.fromString(_issueId)
      ]
    );

    return result[0].toBigInt();
  }

  try_confirmWithdrawIssueDeposit(
    _payoutAddress: Address,
    _issueId: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "confirmWithdrawIssueDeposit",
      "confirmWithdrawIssueDeposit(address,string):(uint256)",
      [
        ethereum.Value.fromAddress(_payoutAddress),
        ethereum.Value.fromString(_issueId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetOctobayCall extends ethereum.Call {
  get inputs(): SetOctobayCall__Inputs {
    return new SetOctobayCall__Inputs(this);
  }

  get outputs(): SetOctobayCall__Outputs {
    return new SetOctobayCall__Outputs(this);
  }
}

export class SetOctobayCall__Inputs {
  _call: SetOctobayCall;

  constructor(call: SetOctobayCall) {
    this._call = call;
  }

  get _octobay(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOctobayCall__Outputs {
  _call: SetOctobayCall;

  constructor(call: SetOctobayCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class DepositEthForGithubUserCall extends ethereum.Call {
  get inputs(): DepositEthForGithubUserCall__Inputs {
    return new DepositEthForGithubUserCall__Inputs(this);
  }

  get outputs(): DepositEthForGithubUserCall__Outputs {
    return new DepositEthForGithubUserCall__Outputs(this);
  }
}

export class DepositEthForGithubUserCall__Inputs {
  _call: DepositEthForGithubUserCall;

  constructor(call: DepositEthForGithubUserCall) {
    this._call = call;
  }

  get _githubUserId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get msgSender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DepositEthForGithubUserCall__Outputs {
  _call: DepositEthForGithubUserCall;

  constructor(call: DepositEthForGithubUserCall) {
    this._call = call;
  }
}

export class RefundUserDepositCall extends ethereum.Call {
  get inputs(): RefundUserDepositCall__Inputs {
    return new RefundUserDepositCall__Inputs(this);
  }

  get outputs(): RefundUserDepositCall__Outputs {
    return new RefundUserDepositCall__Outputs(this);
  }
}

export class RefundUserDepositCall__Inputs {
  _call: RefundUserDepositCall;

  constructor(call: RefundUserDepositCall) {
    this._call = call;
  }

  get _depositId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get msgSender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RefundUserDepositCall__Outputs {
  _call: RefundUserDepositCall;

  constructor(call: RefundUserDepositCall) {
    this._call = call;
  }
}

export class WithdrawUserDepositCall extends ethereum.Call {
  get inputs(): WithdrawUserDepositCall__Inputs {
    return new WithdrawUserDepositCall__Inputs(this);
  }

  get outputs(): WithdrawUserDepositCall__Outputs {
    return new WithdrawUserDepositCall__Outputs(this);
  }
}

export class WithdrawUserDepositCall__Inputs {
  _call: WithdrawUserDepositCall;

  constructor(call: WithdrawUserDepositCall) {
    this._call = call;
  }

  get _depositId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get msgSender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _userId(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class WithdrawUserDepositCall__Outputs {
  _call: WithdrawUserDepositCall;

  constructor(call: WithdrawUserDepositCall) {
    this._call = call;
  }
}

export class SetGovTokenForIssueCall extends ethereum.Call {
  get inputs(): SetGovTokenForIssueCall__Inputs {
    return new SetGovTokenForIssueCall__Inputs(this);
  }

  get outputs(): SetGovTokenForIssueCall__Outputs {
    return new SetGovTokenForIssueCall__Outputs(this);
  }
}

export class SetGovTokenForIssueCall__Inputs {
  _call: SetGovTokenForIssueCall;

  constructor(call: SetGovTokenForIssueCall) {
    this._call = call;
  }

  get _issueId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _govToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetGovTokenForIssueCall__Outputs {
  _call: SetGovTokenForIssueCall;

  constructor(call: SetGovTokenForIssueCall) {
    this._call = call;
  }
}

export class DepositEthForIssueCall extends ethereum.Call {
  get inputs(): DepositEthForIssueCall__Inputs {
    return new DepositEthForIssueCall__Inputs(this);
  }

  get outputs(): DepositEthForIssueCall__Outputs {
    return new DepositEthForIssueCall__Outputs(this);
  }
}

export class DepositEthForIssueCall__Inputs {
  _call: DepositEthForIssueCall;

  constructor(call: DepositEthForIssueCall) {
    this._call = call;
  }

  get _issueId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get msgSender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class DepositEthForIssueCall__Outputs {
  _call: DepositEthForIssueCall;

  constructor(call: DepositEthForIssueCall) {
    this._call = call;
  }
}

export class RefundIssueDepositCall extends ethereum.Call {
  get inputs(): RefundIssueDepositCall__Inputs {
    return new RefundIssueDepositCall__Inputs(this);
  }

  get outputs(): RefundIssueDepositCall__Outputs {
    return new RefundIssueDepositCall__Outputs(this);
  }
}

export class RefundIssueDepositCall__Inputs {
  _call: RefundIssueDepositCall;

  constructor(call: RefundIssueDepositCall) {
    this._call = call;
  }

  get _depositId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get msgSender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RefundIssueDepositCall__Outputs {
  _call: RefundIssueDepositCall;

  constructor(call: RefundIssueDepositCall) {
    this._call = call;
  }
}

export class ConfirmWithdrawIssueDepositCall extends ethereum.Call {
  get inputs(): ConfirmWithdrawIssueDepositCall__Inputs {
    return new ConfirmWithdrawIssueDepositCall__Inputs(this);
  }

  get outputs(): ConfirmWithdrawIssueDepositCall__Outputs {
    return new ConfirmWithdrawIssueDepositCall__Outputs(this);
  }
}

export class ConfirmWithdrawIssueDepositCall__Inputs {
  _call: ConfirmWithdrawIssueDepositCall;

  constructor(call: ConfirmWithdrawIssueDepositCall) {
    this._call = call;
  }

  get _payoutAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _issueId(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConfirmWithdrawIssueDepositCall__Outputs {
  _call: ConfirmWithdrawIssueDepositCall;

  constructor(call: ConfirmWithdrawIssueDepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
