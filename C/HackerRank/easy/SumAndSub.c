#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int first, second;
    float third, fourth;
    scanf("%d %d ", &first, &second);
    scanf("\n");
    scanf("%f %f", &third, &fourth);
    printf("%i %i \n", first + second, first - second);
    printf("%.1f %.1f", third + fourth, third - fourth);
    return 0;
}