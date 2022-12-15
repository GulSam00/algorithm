#include <pthread.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int a = 0;
pthread_mutex_t *global_mutex;

void* thread_routine(void *tmp_mutex)
{
	pthread_mutex_t	*mutex;

	mutex = tmp_mutex;

	// pthread_mutex_init(mutex, NULL);
	// pthread_mutex_lock(&mutex[0]);

	// pthread_mutex_unlock(&mutex[0]);


	// pthread_mutex_init(global_mutex, NULL);
	// pthread_mutex_lock(global_mutex);
	printf ("a : %d\n", a);
	a++;
	// pthread_mutex_unlock(global_mutex);

	return NULL;
}

int main(){
	pthread_t *thread;
	pthread_mutex_t	*mutex;
	int child;

	thread = malloc(sizeof(pthread_t*) * 5);
	mutex = malloc(sizeof(pthread_mutex_t*) * 5);
	global_mutex = malloc(sizeof(pthread_mutex_t*));
	
	int i;
	
	i = 0;
	while(i < 10)
	{
		child = pthread_create(&thread[i],NULL,thread_routine, (void *)mutex);
		printf(" main : %d\n", i);
		i++;
	}
	pthread_join(thread[9], NULL);
	printf ("final a : %d\n", a);
} 