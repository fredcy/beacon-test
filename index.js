import { DAppClient } from '@airgap/beacon-sdk'

async function main() {
    const client = await new DAppClient({name: "Test Client"});
}

main()

