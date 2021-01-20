
char *remove_char(char *dst, const char *src)
{
    /* your solution should return the string even if you use dst */
    src++;
    strcpy(dst, src);
    dst[strlen(src) - 1] = '\0';
    return dst;
}