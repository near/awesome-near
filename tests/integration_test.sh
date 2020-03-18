#!/bin/bash

EXAMPLES=('https://github.com/near-examples/token-contract-as'
          'https://github.com/near-examples/counter'
          'https://github.com/near-examples/wallet-example'
          'https://github.com/near-examples/guest-book'
          'https://github.com/near-examples/chat'
          'https://github.com/nearprotocol/chess'
          )

# TODO=('https://github.com/nearprotocol/corgis'
#       )
for i in "${EXAMPLES[@]}"
do
  mkdir example
	git clone "$i" example
  cd example || exit 1 ## error with cloning
  yarn install
  yarn build
  yarn test
  rm -rf example
done
