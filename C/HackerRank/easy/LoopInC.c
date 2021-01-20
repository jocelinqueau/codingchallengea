#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void count(int a);
int main()
{
    int a, b;
    scanf("%d\n%d", &a, &b);
    // Complete the code.
    char nombres[10][20] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    for (int i = a; i <= b; i++)
    {
        if (i < 10)
        {
            printf("%s \n", nombres[i]);
        }
        else
        {
            if (i % 2)
            {
                printf("odd \n");
            }
            else
            {
                printf("even \n");
            }
        }
    }
    return 0;
}
