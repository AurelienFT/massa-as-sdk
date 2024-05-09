/**
 * This module contains all the functions to interact with Massa ASC (Autonomous Smart Contracts)
 */

import { env } from '../env';

/**
 * Get the fees needed to take some space for a new ASC call at a specific slot
 *
 * @param periodTargetSlot - The period of the target slot
 * @param threadTargetSlot - The thread target slot
 * @param maxGas - The maximum amount of gas that the ASC call can use
 *
 * @returns Null if there is enough place otherwise 
 * the fees needed to take some space for a new ASC call at a specific slot
 */
export function getAscCallFee(
  periodTargetSlot: u64,
  threadTargetSlot: u8,
  maxGas: u64,
): u64 | null {
  const fees = env.getAscCallFee(periodTargetSlot, threadTargetSlot, maxGas);
  if (fees == 0) {
    return null;
  }
  return fees;
}

/**
 * Register a new ASC call
 *
 * @param targetAddress - The address of the target ASC call
 * @param targetFunction - The function to call in the target ASC
 * @param targetPeriod - The period of the target slot for the ASC call
 * @param targetThread - The thread of the target slot for the ASC call
 * @param maxGas - The maximum amount of gas that the ASC call can use
 * @param rawCoins - The amount of coins to send to the target ASC
 * @param params - The parameters to send to the target ASC function called
 *
 * @returns The id of the new ASC call
 */
export function ascCallRegister(
  targetAddress: string,
  targetFunction: string,
  targetPeriod: u64,
  targetThread: u8,
  maxGas: u64,
  rawCoins: u64,
  params: StaticArray<u8>,
): string {
  return env.ascCallRegister(
    targetAddress,
    targetFunction,
    targetPeriod,
    targetThread,
    maxGas,
    rawCoins,
    params,
  );
}

/**
 * Check if an ASC call exists
 *
 * @param ascCallId - The id of the ASC call
 *
 * @returns True if the ASC call exists otherwise false
 */
export function ascCallExists(ascCallId: string): bool {
  return env.ascCallExists(ascCallId);
}

/**
 * Cancel an ASC call
 *
 * @param ascCallId - The id of the ASC call
 */
export function ascCallCancel(ascCallId: string): void {
  env.ascCallCancel(ascCallId);
}
