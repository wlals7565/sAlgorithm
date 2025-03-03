function solution(N, number) {
    if (N === number) return 1;  // N이 이미 목표 숫자라면 1 반환

    const dp = Array.from({ length: 9 }, () => new Set()); // 1~8번까지 저장
    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(String(N).repeat(i))); // 5, 55, 555 등 추가
    }

    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j < i; j++) {
            for (const a of dp[j]) {
                for (const b of dp[i - j]) {
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(a * b);
                    if (b !== 0) dp[i].add(Math.floor(a / b));
                }
            }
        }
        if (dp[i].has(number)) return i;  // 목표 숫자가 생성되었으면 최소 횟수 반환
    }

    return -1;  // 8번 사용해도 만들 수 없으면 -1 반환
}


