#include <stdio.h>
/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
int max_of_two(int a, int b);
int max_of_four(int a, int b, int c, int d);
int main()
{
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);

    return 0;
}

int max_of_four(int a, int b, int c, int d)
{
    int max_1 = max_of_two(a, b);
    int max_2 = max_of_two(max_1, c);
    int max_3 = max_of_two(max_2, d);
    return max_3;
}

int max_of_two(int a, int b)
{
    if (a < b)
    {
        return b;
    }
    else
    {
        return a;
    }
}

#include <stdio.h>
/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
int max(int a, int b)
{
    // this is a ternary operator
    // conditional ? return value if true : return value if false
    return a > b ? a : b;
}

int max_of_four(int a, int b, int c, int d)
{
    return max(a, max(b, max(c, d)));
}

int main()
{
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);

    return 0;
}
