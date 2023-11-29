import '@gym-mate/ui/styles.pcss';
import '../app.pcss';
import { authService } from '$lib/services';

authService.checkAuthorization();
