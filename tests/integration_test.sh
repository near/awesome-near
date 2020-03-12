#!/bin/bash

EXAMPLES=('https://github.com/nearprotocol/token-contract-as'
          'https://github.com/nearprotocol/counter'
          'https://github.com/nearprotocol/wallet-example')

TODO=('https://github.com/nearprotocol/corgis')
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
