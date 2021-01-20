#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int addArray(int *numbers, int length);
int main()
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    int length;

    scanf("%d", &length);
    int numbers[length];
    for (int i = 0; i < length; i++)
    {
        scanf("%d", &numbers[i]);
    }
    printf("%i", addArray(numbers, length));
    return 0;
}

int addArray(int *numbers, int length)
{
    int sum = 0;
    for (int i = 0; i < length; i++)
    {
        sum += numbers[i];
    }
    return sum;
}
