#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Complete the following function.

void calculate_the_maximum(int n, int k)
{
    //Write your code here.
    int maximumOR = 0, maximumAND = 0, maximumNOR = 0;
    for (int i = 2; i <= n; i++)
    {
        for (int j = 1; j < i; j++)
        {

            if ((j | i) > maximumOR && (j | i) < k)
            {
                maximumOR = (j | i);
                // printf("%d\n", maximumOR);
            }
            if ((j & i) > maximumAND && (j & i) < k)
            {
                maximumAND = (j & i);
                // printf("%d\n", maximumAND);
            }
            if ((j ^ i) > maximumNOR && (j ^ i) < k)
            {
                maximumNOR = (j ^ i);
                // printf("%d\n", maximumNOR);
            }
        }
    }
    printf("%d\n", maximumAND);
    printf("%d\n", maximumOR);
    printf("%d\n", maximumNOR);
    return;
}

int main()
{
    int n, k;

    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);

    return 0;
}
