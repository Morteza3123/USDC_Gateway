/**
 * Copyright 2025 Circle Internet Group, Inc. All rights reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { account, ethereum, base, avalanche } from "./setup.js";
import { GatewayClient } from "./gateway-client.js";
import { burnIntent, burnIntentTypedData } from "./typed-data.js";

// Initialize a lightweight API client for interacting with Gateway
const gatewayClient = new GatewayClient();


// Check the account's balances with the Gateway API
console.log(`Checking balances...`);
const { balances } = await gatewayClient.balances("USDC", account.address);
for (const balance of balances) {
  console.log(`  - ${GatewayClient.CHAINS[balance.domain]}:`, `${balance.balance} USDC`);
}


