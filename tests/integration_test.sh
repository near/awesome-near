#!/bin/bash

EXAMPLES=('https://github.com/nearprotocol/token-contract-as'
          'https://github.com/nearprotocol/counter'
          'https://github.com/near-examples/guest-book'
          'https://github.com/nearprotocol/wallet-example'
          'https://github.com/nearprotocol/near-chess')

TODO=('https://github.com/nearprotocol/chat')
for i in "${EXAMPLES[@]}"
do
  mkdir example
	git clone $i example
  cd example
  yarn install
  yarn build
  yarn test
  rm -rf example
done
