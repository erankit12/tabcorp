# Tabcorp : Betting host

Tote betting involves punters choosing the outcome of a race by placing bets into a pool of money. Punter who successfully predict the outcome of a race take a share of the pool proportional to their stake.
  - Contains 3 types of Bet(i.e Win, Place, Exacta) in particular format.
  - format is Bet:&lt;product&gt;:&lt;selections&gt;:&lt;stake&gt;
  - Last input line will be result as per the race as below format
        - Result:&lt;first&gt;:&lt;second&gt;:&lt;third&gt;     
  - Output of above will be in below format
        - &lt;product&gt;:&lt;winningSelections&gt;:&lt;dividend&gt;

# Structure Details

Details of the directory structure used in the project

| Directory | Detail |
| ------ | ------ |
|/ cli| for command line interaction |
|/cli/helper | contains helper function for command line interaction |
|/core | contains core calculation of dividend and pool|
|/lib | contains validation file|
|/test | contains test cases|

# Configuration
- Commission of Tabcorp is configurable and can be changed in config.json file.

# Prerequisite
- Node should be installed in the system

# How to install

```sh
$ git clone https://github.com/erankit12/tabcorp
$ cd tabcorp
$ npm install
```
# How to run
```sh
$ npm start
- input should be from terminal only
<sample input>
```
# Sample Input

```sh
Bet:W:1:3
Bet:W:2:4
Bet:W:3:5
Bet:W:4:5
Bet:W:1:16
Bet:W:2:8
Bet:W:3:22
Bet:W:4:57
Bet:W:1:42
Bet:W:2:98
Bet:W:3:63
Bet:W:4:15
Bet:P:1:31
Bet:P:2:89
Bet:P:3:28
Bet:P:4:72
Bet:P:1:40
Bet:P:2:16
Bet:P:3:82
Bet:P:4:52
Bet:P:1:18
Bet:P:2:74
Bet:P:3:39
Bet:P:4:105
Bet:E:1,2:13
Bet:E:2,3:98
Bet:E:1,3:82
Bet:E:3,2:27
Bet:E:1,2:5
Bet:E:2,3:61
Bet:E:1,3:28
Bet:E:3,2:25
Bet:E:1,2:81
Bet:E:2,3:47
Bet:E:1,3:93
Bet:E:3,2:51
Result:2:3:1
```

# Sample output

```sh
Win:2:$2.61
Place:2:$1.06
Place:3:$1.27
Place:1:$2.13
Exacta:2,3:$2.43
```
# How to execute test cases
```sh
$ npm test
```
# Validations
- Every input line should contain 4 tokens separated by ':'.
- Input line should start with either Bet or Result.
- Type of Bet should be from (W, P, E) only.
- Selection of horse should in integer only.
- Stake should be number.
- For exacta bet, selection should be in pair of 2.

# Assumptions
- If no input bet provided for any particular bet type then output will also not contain that bet type. eg: if input contains entries for only win and place then output will also contains only win and place and not for exacta.
- If horses in result entry is not present in input bets, then output for that bet type will be message like "No bet on this horse" for the corresponding bet type.
