[![make.fun · u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/ujang201/one-line-one-laugh-4z/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/leaderboard)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/ujang201/one-line-one-laugh-4z/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

# One Line, One Laugh

Entry for the [One Line, One Laugh](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) bounty on [make.fun](https://make.fun) — $2 total, top 10 entries share the prize.

## The entry

> My smartwatch says I burned 300 calories today — mostly from running out of excuses to avoid the gym.

101 characters, one line, self-contained. The setup sounds like a fitness humble-brag; the twist reframes the "running" as running out of excuses — the one workout procrastination actually trains.

## How it works

`main.ts` composes the fixed line from a setup and a twist, validates it (1–140 characters, single line, not only whitespace), then writes exactly that text — no trailing newline — to `/output/entry.txt`. The output is fully deterministic: every run produces the same bytes.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
